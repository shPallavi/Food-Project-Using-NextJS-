import { shareMeal } from "@/lib/actions";

export async function POST(request) {
  const formData = await request.formData();
  await shareMeal(null, formData);
  return new Response(null, { status: 201 });
}
