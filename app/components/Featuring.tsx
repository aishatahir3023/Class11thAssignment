const ArryMap = () => {
    const carKeys = [
        'image',
        'brand',
        'price',
        'reviews'
    ];

    const cars = [
        {
            image: '/images/images/01.jpg',
            brand: 'Toyota',
            price: 20000,
            reviews: [
                { title: '★ ★ ★ ★ ★  626 Reviews' },
            ]
        },
        {
            image: '/images/images/02.jpg',
            brand: 'Honda',
            price: 15000,
            reviews: [
                { title: '★ ★ ★ ★ ★  626 Reviews' },
            ]
        },
        {
            image: '/images/images/03.jpg',
            brand: 'Ford',
            price: 30000,
            reviews: [
                { title: '★ ★ ★ ★ ★  626 Reviews' },
            ]
        }
    ];

    return (
        <div className="bg-gray-100">
            <div className="flex">
                <h2 className="font-bold text-2xl ml-20 mt-20">Featured New Cars</h2>
                <a className="ml-96 pl-96 mt-20 text-blue-500">View All New Cars</a>
            </div>

            <div className="space-x-9 pl-20 mt-7 font-bold border-b-2 border-gray-300">
                <a className="font-extrabold border-4 border-b-blue-800">Popular</a>
                <a className="hover:font-extrabold">Upcoming</a>
                <a className="hover:font-extrabold">Newly Launched</a>
            </div>

           
            <div className="flex space-x-6 ml-12 mt-4"> 
                {cars.map((car, index) => (
                    <div key={index} className="flex flex-col space-y-4 border-2 border-green-400 p-5 items-center justify-between">
                        <img
                            src={car.image}
                            alt={car.brand}
                            style={{ width: 300, height: 300 }}
                        />
                        <h3>{car.brand}</h3>
                        <p>Price: ${car.price}</p>

                        <div className="flex flex-col space-y-2">
                            {car.reviews.map((review, index) => (
                                <div key={index}>
                                    <h4>{review.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArryMap;


