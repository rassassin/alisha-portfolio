import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    title: "Modern Office",
    height: "420px",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=800&q=80",
    title: "Workspace Desk",
    height: "280px",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80",
    title: "Creative Studio",
    height: "360px",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    title: "Architecture Interior",
    height: "500px",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    title: "Laptop Workspace",
    height: "310px",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=800&q=80",
    title: "Workspace Desk",
    height: "280px",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    title: "Architecture Interior",
    height: "500px",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    title: "Laptop Workspace",
    height: "310px",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80",
    title: "Creative Studio",
    height: "360px",
  },
];

export default function PortfolioGallery() {
  return (
    <div className="p-8 bg-black min-h-screen">
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          350: 1,
          750: 2,
          900: 3,
          1200: 4,
        }}
      >
        <Masonry gutter="16px">
          {images.map((img) => (
            <div
              key={img.id}
              style={{
                height: img.height,
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
