
import './App.css';
import Header from './Header';
import CardContainer from './CardContainer';
import Footer from './Footer';


function App() {
  let CardContainerData = [

    {
      image:"https://th.bing.com/th/id/OIP.oS-B_NUFpBjLHflwNQI33wHaHa?w=199&h=199&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3",
      title: "nicklace",
      description:
        "A necklace is a piece of jewelry worn around the neck, often made of precious metals and adorned with gemstones or pendants. It can be a simple chain or a more elaborate design, serving as both a fashion statement and a symbol of personal style."
    },
    {
      image:"https://th.bing.com/th/id/OIP.YQXGPsuxY77Th90FS9BywQHaHa?w=145&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7",
  
      title: "bracelet",
      description:
        "A bracelet is a piece of jewelry worn around the wrist, typically made of materials like metal, leather, or fabric. It can be simple or ornate, often featuring charms or decorative elements. Bracelets are popular accessories that can complement various outfits and styles."
    },
    {
      image:
        
        "https://th.bing.com/th?id=OIF.m0SR4LV%2bR0ntXKgg474%2fTQ&w=165&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7",
      title: "ring",
      description:
        "A ring is a circular band, typically made of precious metal, worn on the finger as a symbol of commitment, fashion, or personal expression. Rings can be adorned with gemstones or intricate designs and are often associated with significant life events like engagements and weddings.",
    },
      ] 
   
  return (
      <div style={{ padding: "20px" }}>
    
        <Header />
         <CardContainer cards={CardContainerData} /> 
        <Footer />

    
        
  
       

      </div>

  
  );
}

export default App;