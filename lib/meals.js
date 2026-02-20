import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
const db = sql("meals.db");

// run() is basically used to inserteing the Data  from data base

// all() is used to fetch the data from data base and all is used for the multilple rows inited

// get() if it is a single row then use get method

export async function getMeals() {
  try {
    return db.prepare("SELECT * FROM meals").all();
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ? ").get(slug);
}

export async function saveMeal(meal) {
  try {
    let slug = slugify(meal.title, { lower: true });
    let counter = 1;
    let existingSlug = db
      .prepare("SELECT slug FROM meals WHERE slug = ? ")
      .get(slug);

    // Make slug unique by appending a number if needed
    while (existingSlug) {
      slug = `${slugify(meal.title, { lower: true })}-${counter}`;
      existingSlug = db
        .prepare("SELECT slug FROM meals WHERE slug = ? ")
        .get(slug);
      counter++;
    }

    meal.slug = slug;
    meal.instructions = xss(meal.instructions);

    const extensions = meal.image.name.split(".").pop();
    const fileName = `${meal.slug}.${extensions}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();
    await new Promise((resolve, reject) => {
      stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
          reject(new Error("Saving Image Failed..."));
        } else {
          stream.end(() => resolve());
        }
      });
    });

    meal.image = `/images/${fileName}`;

    // Use a transaction to ensure atomicity
    db.transaction(() => {
      db.prepare(
        `
        INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
        VALUES(
             @title,
              @summary,
              @instructions,
              @creator,
              @creator_email,
              @image,
              @slug)
      `,
      ).run(meal);
    })();
  } catch (error) {
    console.error("Error saving meal:", error);
    throw error;
  }
}
