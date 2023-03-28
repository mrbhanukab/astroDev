import Search from "./Search/Search";
import Weather from "./Weather/Weather";

function Section() {
  return (
    <section style={{ margin: "1rem" }}>
      <Weather />
      <Search />
    </section>
  );
}

export default Section;
