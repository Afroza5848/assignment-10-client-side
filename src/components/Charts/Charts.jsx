

const Charts = () => {
   
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 h-full dark:bg-gray-100 p-8">
           
                <section className=" dark:text-gray-800 ">
                    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                        <h2 className="text-2xl font-semibold sm:text-4xl text-orange-500 eb-serif">Frequently Asked Questions</h2>
                        <p className="mt-4 mb-8 dark:text-gray-600">Certainly! Here are some frequently asked questions (FAQs) that customers might have regarding a website specializing in Jute & Wooden Home Decor:</p>
                        <div className="space-y-4">
                            <details className="w-full border border-gray-30 rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Are your products eco-friendly?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, we are committed to sustainability. Our jute products are biodegradable, and we prioritize using renewable wood sources. </p>
                            </details>
                            <details className="w-full border border-gray-30 rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How do I clean and maintain jute and wooden items?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600"> We recommend gentle cleaning methods for both jute and wood. For specific care instructions, please refer to the product page or contact our customer support. </p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Do you offer international shipping?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600"> Yes, we ship internationally. Shipping costs and delivery times may vary depending on your location. </p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Are your products handmade?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, many of our products are handmade by skilled artisans, ensuring attention to detail and quality craftsmanship. </p>
                            </details>
                        </div>
                    </div>
                </section>
           
            <div >
                <form noValidate="" className="space-y-6 pt-8 border border-orange-500 p-10 rounded">
                <h2 className="text-2xl font-semibold sm:text-4xl text-orange-500 eb-serif text-center">AsK More Question About our Decor<span className="text-gray-800">Art</span></h2>
                
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded " />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded " />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded "></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-orange-600 dark:text-gray-50">Send Message</button>
                </form>
            </div>
        </div>

    );
};

export default Charts;