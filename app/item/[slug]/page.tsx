import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";  // Ensure this is correctly set up
import { menu } from "@/types/menu";
import { groq } from "next-sanity";
import Image from "next/image"; // Import Image

interface ItemPageProps {
  params: Promise<{ slug: string }>;
}

async function getmenu(slug: string): Promise<menu | null> {
  return client.fetch(
    groq`*[_type == "food" && slug.current == $slug][0]{
      _id,
      name,
      _type,
      image,
      price,
    }`,
    { slug }
  );
}

export default async function item({ params }: ItemPageProps) {
  const { slug } = await params;
  const menu = await getmenu(slug);

  // Check if menu is null and handle accordingly
  if (!menu) {
    return <div>Menu item not found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
        <div className="aspect-square">
          {menu.image && (
            <Image
              src={urlFor(menu.image).url()}  // Ensure to use .url() here
              alt={menu.name}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{menu.name}</h1>
          <p>{menu.price}</p>
        </div>
      </div>
    </div>
  );
}
