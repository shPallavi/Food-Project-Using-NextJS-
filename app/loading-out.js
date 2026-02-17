import classes from "./loading.module.css";
import Link from "next/link";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function MealsLoadingPage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <p className={classes.loading}>Fetching Meals...</p>
    </>
  );
}
