import React from 'react'

const Content = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className="w-lg flex flex-col gap-10 md:py-20 py-10 px-5">
                <div className='flex flex-col gap-2'>
                    <h2 className='heading1'>Introduction</h2>
                    <p>
                    Welcome to Rider Pro, a subsidiary of Crown Group of Companies. By accessing or using our website, mobile sites, or mobile applications (collectively, the "Platform"), you agree to be bound by these Terms and Conditions. These Terms constitute a legally binding agreement between you ("User," "You," or "Your") and Rider Pro ("We," "Us," or "Our"). If you do not agree with any part of these Terms, you must discontinue using our Platform immediately.
                    </p>
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='heading3'>1. Eligibility</h3>
                    <p>
                    You must be at least 18 years old or of legal age to enter into a binding contract in your jurisdiction to use our services. By using our Platform, you represent and warrant that you meet these eligibility requirements.
                    </p>
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='heading4'>2. Use of the Platform</h3>
                    <ul className='flex flex-col gap-2 mt-2 list-disc list-inside'>
                        <li>You agree to use the Platform only for lawful purposes and in accordance with these Terms.</li>
                        <li>You shall not misuse, interfere with, or disrupt the operation of the Platform, including attempting to access restricted sections, introducing malware, or engaging in fraudulent activities.</li>
                        <li>You are responsible for ensuring the confidentiality of your account credentials. Any unauthorized access or use of your account must be reported to us immediately.</li>                   
                    </ul>
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='heading4'>3. Orders and Payments</h3>
                    <ul className='flex flex-col gap-2 mt-2 list-disc list-inside'>
                        <li>All orders placed through our Platform are subject to acceptance and availability.</li>
                        <li>Prices for products and services are listed on our Platform and may be subject to change without prior notice.</li>
                        <li>We accept various payment methods as specified on the Platform. By providing payment information, you represent that you have the legal right to use the selected payment method.</li>                   
                    </ul>
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='heading4'>4. Cancellations, Refunds, and Returns</h3>
                    <ul className='flex flex-col gap-2 mt-2 list-disc list-inside'>
                        <li>Cancellation policies vary based on the product or service purchased. Details will be provided at the time of purchase.</li>
                        <li>Refunds, if applicable, will be processed in accordance with our Refund Policy.</li>
                        <li>Returns of physical products must comply with our Return Policy, and items must be in their original condition with proof of purchase.</li>                   
                    </ul>
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='heading4'>5. User Content and Conduct</h3>
                    <ul className='flex flex-col gap-2 mt-2 list-disc list-inside'>
                        <li>You may be allowed to post content such as reviews, comments, or other submissions on our Platform. You grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and display such content.</li>
                        <li>You agree not to post any unlawful, offensive, or infringing material that violates applicable laws or third-party rights.</li>                        
                    </ul>
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='heading4'>6. Intellectual Property</h3>
                    <ul className='flex flex-col gap-2 mt-2 list-disc list-inside'>
                        <li>You may be allowed to post content such as reviews, comments, or other submissions on our Platform. You grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and display such content.</li>
                        <li>You may not copy, distribute, or create derivative works from any content on our Platform without prior written permission from us.</li>                        
                    </ul>
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='heading4'>7. Limitation of Liability</h3>
                    <ul className='flex flex-col gap-2 mt-2 list-disc list-inside'>
                        <li>We do not guarantee that the Platform will always be available, error-free, or secure.</li>
                        <li>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our Platform or reliance on any information provided.</li>                        
                    </ul>
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='heading4'>8. Indemnification</h3>
                    <p>You agree to indemnify and hold Rider Pro harmless from any claims, damages, losses, liabilities, or expenses arising from your violation of these Terms or misuse of the Platform.
                    </p>                   
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='heading4'>9. Privacy Policy</h3>
                    <p>Your use of the Platform is also governed by our Privacy Policy, which details how we collect, use, and protect your personal information.
                    </p>                   
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='heading4'>10. Termination</h3>
                    <p>We reserve the right to terminate or suspend your account at any time, without prior notice, if you violate these Terms or engage in conduct harmful to us or other users.
                    </p>                   
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='heading4'>11. Governing Law and Dispute Resolution</h3>
                    <p>These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes shall be resolved through arbitration or in the courts of Karachi, Pakistan.
                    </p>                   
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='heading4'>12. Changes to These Terms</h3>
                    <p>We reserve the right to modify these Terms at any time. Changes will be posted on our Platform, and continued use after such modifications constitutes your acceptance of the updated Terms.
                    </p>                   
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='heading4'>13. Contact Us</h3>
                    <p>For any questions or concerns regarding these Terms, please contact us at:
                    </p>
                    <ul className='flex flex-col gap-2 mt-2 list-disc list-inside'>
                        <li><b>Email:</b> info@riderpro.io</li>
                        <li><b>Phone:</b>021-111-000-348</li>
                        <li><b>Address:</b>Suite # 120, Office Wing, 1st floor, Park Towers, Block 5 Clifton</li>                     
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Content