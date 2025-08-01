import ComponentB from "./ComponentB";

function ComponentA() {
    const items = [
        {
            image: "https://th.bing.com/th/id/OIP.EvPhRWsRqn3Cy_hv9DeITAHaK-?w=118&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3",
            title: "IT",
            description: "horor movie",
        },
        {
            image: "https://th.bing.com/th/id/OIP.xLsF-29v0bUucu4gmF286QHaLH?w=115&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3",
            title: "lord of the rings",
            description: "fantasy movie",
        },
        {
            image: "https://th.bing.com/th/id/OIP.MoRyc41BNuiafWbK6_gUhQHaFj?w=228&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3",
            title: "The expendables",
            description: "action movie",
        },
    ];

    return (
        <div className="ComponentA">
            <h1>welcome to my app</h1>
            <ComponentB items={items} />
        </div>
    );
}
export default ComponentA;
