import { useEffect, useState } from "react";

function Product() {
  let [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:8000/");
      const jsonData = await data.json();
      setItems(jsonData);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Sarees
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {items.map((item, index) => (
              <div key={index} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={item.image}
                    alt={`Front of ${item.name}`}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {item.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                    <div className="flex flex-row space-x-2 mt-2">
                      {item.product_images.map((item1, index1) => (
                        <div>
                          <img
                            key={index1}
                            src={item1.url}
                            alt=""
                            className="w-20"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* More products... */}
        </div>
      </div>
    </>
  );
}

export default Product;
