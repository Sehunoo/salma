import ComponentC from "./ComponentC";
function ComponentB({ items }) {
    return (
        <div className="ComponentB">
            <h2>favorite movises</h2>
            <ComponentC items={items} />
        </div>
    );
}
export default ComponentB;
