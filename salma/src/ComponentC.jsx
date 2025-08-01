function ComponentC({ items }) {
    return (
        <div className="ComponentC-row">
            {items.map((item, index) => (
                <div className="ComponentC" key={index}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );image
}
export default ComponentC;
