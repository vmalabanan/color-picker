import "./App.css";
import TitleBar from "./TitleBar";
import ArtworkCard from "./ArtworkCard";
import ArtworkGrid from "./ArtworkGrid";

function App() {
  // Fetch Art Institute of Chicago API
  fetch(
    "https://api.artic.edu/api/v1/artworks?limit=100&fields=id,image_id,title,artist_display,date_display,main_reference_number,color,thumbnail,has_not_been_viewed_much,place_of_origin,medium_display,dimensions,credit_line,is_on_view"

    // note: limit=X and page=X -- make the values variables?

    // https://api.artic.edu/api/v1/artworks?limit=100&page=1&fields=id,image_id,title,artist_display,date_display,main_reference_number,color,thumbnail,has_not_been_viewed_much,place_of_origin,medium_display,dimensions,credit_line,is_on_view
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // const artArray = data.data;
      // console.log(artArray[1]); // Show info for one piece of art (index 1, in this case)
      // console.log(artArray[1].color.h); // Isolate the h value of a particular artwork (1, in this case)

      const baseImageEndPt = data.config.iiif_url; // base URL for artwork image

      const imgURLExample =
        baseImageEndPt +
        "/" +
        data.data[1].image_id +
        "/full/843,/0/default.jpg";
    });

  return (
    <div>
      <TitleBar />
      <ArtworkCard />
      <ArtworkGrid />
    </div>
  );
}

export default App;
