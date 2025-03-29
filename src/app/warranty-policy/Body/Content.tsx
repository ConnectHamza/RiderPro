import React from 'react'

const Content = () => {
    return (
        <div className='w-full flex justify-center bg-[#f7f7f7]'>
            <div className="w-lg flex flex-col gap-10 md:py-20 py-10 px-5">
                <div className='flex flex-col gap-2'>
                    <h1 className='heading2'>Warranty policy</h1>
                    <p>
                    This Warranty Policy outlines the terms and conditions for claiming a warranty on your product. Please read carefully to understand your rights and responsibilities.
                    </p>
                </div>

                <div className='flex flex-col gap-2'>
                <h2 className='heading4'>Warranty Claim Process</h2>
                    <h4 className='heading6 mt-1'>1. Your Personal Information:</h4>
                    <ul className='list-inside list-disc'>
                        <li>Visit an authorized retailer where you purchased the product.</li>
                        <li>The system calculates the depreciated amount based on the product's start date and usage duration.</li>
                        <li>First month: Free of depreciation.</li>
                        <li>After first month: The depreciation rate would be 20% applicable.</li>
                        <li>After second month: The depreciation rate 10% implies onwards</li>
                    </ul>

                    <h4 className='heading6 mt-1'>2. Customer Options:</h4>
                    <p>After viewing the depreciated amount, the customer can choose:</p>
                    <ul className='list-inside list-disc'>
                        <li><b>Option 1:</b> Convert the depreciated amount into application wallet points for future purchases.</li>
                        <li><b>Option 2:</b> Use points to purchase a new battery directly through the application.</li>                        
                    </ul>

                    <h4 className='heading6 mt-1'>3. Retailer's Role:</h4>                    
                    <ul className='list-inside list-disc'>
                        <li>The retailer scans the QR code to initiate the warranty claim.</li>
                        <li>If the product is being returned (e.g., battery), the depreciated amount is credited to the customer's application wallet.</li>                        
                        <li>The retailer must return the product to the company to complete the warranty process.</li>
                    </ul>

                    <h4 className='heading6 mt-1'>4. Warranty Start Date:</h4>                    
                    <ul className='list-inside list-disc'>
                        <li>The warranty begins when the retailer scans the QR code.</li>
                        <li>If scanned after 6 months of purchase, the warranty starts from the retailer's scan date.</li>                        
                    </ul>

                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='heading4'>Depreciated Amount</h3>
                    <ul className='list-inside list-disc'>
                        <li>Calculated based on the product's start date and usage duration.</li>
                        <li>Displayed clearly on the confirmation screen for transparency.</li>                        
                    </ul>
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='heading4'>Responsibilities</h3>
                    <h4 className='heading6 mt-2'>Company Responsibilities</h4>
                    <p>Handle warranty claims directly with the retailer. - Hold the depreciated amount until the product is returned.</p>

                    <h4 className='heading6'>Returning the Product</h4>                    
                    <ul className='flex flex-col gap-3 mt-2'>
                        <li>The retailer must return the product to finalize the warranty process.</li>
                        <li>The retailer scans the Item QR Code to confirm the return.</li>                     
                    </ul>

                    <h4 className='heading6'>Support and Assistance</h4>                    
                    <ul className='flex flex-col gap-3 mt-2'>
                        <li>For any issues, contact our Customer Support Center.</li>
                        <li>Support details are available in the app and on our website.</li>                     
                    </ul>
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='heading4'>Key Points to Remember</h3>
                    <ul className='flex flex-col gap-3 mt-2'>
                        <li>The retailer initiates the warranty claim via QR scan.</li>
                        <li>Depreciation is calculated based on start date & usage.</li>  
                        <li>✓Customers can use points for purchases or wallet credits.</li>  
                        <li>The company holds the amount until product return.</li>                 
                    </ul>
                                     
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='heading4'>Policy Updates</h3>
                    <p>The company reserves the right to update this policy. Customers will be notified through the app or official communication.
                    </p>
                </div>



            </div>
        </div>
    )
}

export default Content