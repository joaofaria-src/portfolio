import React from "react";
import Banner from "./Banner";
import Service from "./Service";

function Main() {
  return (
    <main>
      <Banner />
      <section className="main">
        <section className="card-container">
          <Service
            title="Symbolize Your Love with Timeless Elegance"
            description="Celebrate your love with our exquisite engagement rings, meticulously crafted to symbolize your unique bond. From timeless solitaires to dazzling halos, our collection offers something for every style and budget. Begin your journey together with a symbol of enduring commitment and beauty. Explore our range today and find the perfect ring to capture your love story."
            linkTo="/gallery/Wedding Rings"
          />
          <Service
            title="Elevate Your Special Day with Timeless Beauty"
            description="Elevate your special day with our exquisite watches, designed to complement your unique style and moments of celebration. Crafted with precision and passion, each timepiece embodies the essence of elegance and sophistication. Whether you prefer classic simplicity or modern innovation, our diverse collection has something to suit every taste. Make your special occasions unforgettable with a watch that symbolizes timeless beauty."
            linkTo="/gallery/Watches"
          />
          <Service
            title="Commemorate Your Milestones with Lasting Memories"
            description="Celebrate the milestones of your journey together with our exquisite anniversary gifts, designed to honor your enduring love. From timeless diamond necklaces to elegant watches, our collection offers the perfect way to mark each passing year. Commemorate your bond with a gift that reflects the depth of your connection and the joy of a lifetime spent together. Explore our range and find the perfect expression of your love."
            linkTo="/gallery/Bracelets"
          />
        </section>
      </section>
    </main>
  );
}

export default Main;
