import Image from 'next/image'
import React from 'react'

const articletemp = () => {
  return (
    <div>
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
        <div className="mt-10 inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
          <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            Terms & Conditions
          </span>
        </div>
        <h2 className=" text-left mt-6 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-xl">About</h2>
        <p className="text-lg text-indigo-200/65 text-xs text-left">Welcome to Simplertechnologies. These Terms and Conditions outline the rules and regulations for the use of our website, products, and services. By accessing or using any of our services, you agree to comply with these terms. If you do not agree with any part of these terms, please do not use our services.</p>
        <p className="text-lg text-indigo-200/65 text-xs text-left">These terms apply to all users, including businesses, partners, and individuals who engage with our services. Simplertechnologies provides ERP and management software solutions designed to streamline operations and improve efficiency across various industries. Our services include cloud solutions, on-premises installations, regular updates, maintenance, and dedicated customer support.</p>

        <h2 className=" text-left mt-6 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-xl">Definitions</h2>
        
            <li className="text-lg text-indigo-200/65 text-xs text-left"><strong>"Company"</strong> refers to Simplertechnologies.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left"><strong>"User"</strong> refers to any individual or entity accessing or using our services.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left"><strong>"Services"</strong> encompass our ERP and management software solutions, including but not limited to software licenses, cloud solutions, on-premises installations, updates, maintenance, and customer support.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left"><strong>"Subscription"</strong> refers to the payment-based access to our software solutions.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left"><strong>"Intellectual Property"</strong> refers to all trademarks, patents, software, content, and proprietary information owned by Simplertechnologies.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left"><strong>"Third-Party Services"</strong> refer to external platforms, plugins, or tools that may be integrated with our software.</li>

        <h2 className=" text-left mt-6 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-xl">Use of Services</h2>
        
            <li className="text-lg text-indigo-200/65 text-xs text-left">Users must provide accurate, complete, and up-to-date information during registration.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Unauthorized access, modification, or distribution of our software is strictly prohibited.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Users are responsible for maintaining the security of their accounts and passwords.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Any misuse or engagement in illegal activities using our services may result in immediate termination of access.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Our services may not be used to store, distribute, or transmit any unlawful, harmful, or malicious content.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Users are responsible for any activity conducted under their account, including any unauthorized access caused by negligence.</li>

        <h2 className=" text-left mt-6 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-xl">Intellectual Property Rights</h2>
        
            <li className="text-lg text-indigo-200/65 text-xs text-left">All content, software, trademarks, and branding elements are the exclusive property of Simplertechnologies and are protected by intellectual property laws.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Users may not modify, reproduce, distribute, or resell any portion of our software or services without prior written consent from Simplertechnologies.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Any suggestions or feedback provided by users may be used by Simplertechnologies for improvement without compensation.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Our software and proprietary algorithms are protected under copyright and patent laws. Any infringement or unauthorized use will be subject to legal action.</li>

        <h2 className=" text-left mt-6 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-xl">Data Privacy and Security</h2>
        
            <li className="text-lg text-indigo-200/65 text-xs text-left">Simplertechnologies is committed to protecting user data and complies with GDPR, HIPAA, and other applicable regulations.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">User data is stored securely, and appropriate measures are taken to prevent unauthorized access.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Users are responsible for maintaining the confidentiality of their account credentials.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">In the event of a data breach, affected users will be notified promptly.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">We do not sell, share, or disclose personal information to third parties except as required by law.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Users may request data deletion in compliance with applicable privacy laws.</li>

        <h2 className=" text-left mt-6 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-xl">Payment, Subscription, and Refund Policy</h2>
        
            <li className="text-lg text-indigo-200/65 text-xs text-left">Our services may be available through different subscription plans, which must be paid as per the agreed terms.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Failure to make timely payments may result in suspension or termination of services.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Refunds are provided under limited circumstances and are subject to our refund policy.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Taxes and additional charges may be applicable based on location and payment method.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Subscription fees are non-refundable unless otherwise specified.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Users may upgrade or downgrade their plans by contacting support.</li>

        <h2 className=" text-left mt-6 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-xl">Service Availability and Limitation of Liability</h2>
        
            <li className="text-lg text-indigo-200/65 text-xs text-left">We strive to ensure continuous and uninterrupted service availability; however, we do not guarantee that our services will always be available or error-free.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Scheduled maintenance, technical issues, or unforeseen circumstances may temporarily disrupt service availability.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Simplertechnologies is not liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Users agree that any use of our software is at their own risk.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">In cases of service disruptions, our team will provide support and resolutions as promptly as possible.</li>

        <h2 className=" text-left mt-6 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-xl">Termination and Suspension</h2>
        
            <li className="text-lg text-indigo-200/65 text-xs text-left">Simplertechnologies reserves the right to terminate or suspend user accounts if found in violation of these terms.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Users may terminate their accounts by providing written notice to our support team.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Upon termination, access to our services will be revoked, and any outstanding payments must be settled.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">If a user breaches any term, legal actions may be taken in addition to service termination.</li>

        <h2 className=" text-left mt-6 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-xl">Governing Law and Dispute Resolution</h2>
        
            <li className="text-lg text-indigo-200/65 text-xs text-left">These Terms and Conditions are governed by the laws of [Jurisdiction].</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Any disputes arising out of or in connection with these terms shall be resolved through arbitration or legal proceedings within the applicable jurisdiction.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Users agree to attempt to resolve disputes amicably before resorting to legal action.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Disputes related to payments or service issues should be reported within 30 days of the incident.</li>

        <h2 className=" text-left mt-6 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-xl">Modifications and Amendments</h2>
        
            <li className="text-lg text-indigo-200/65 text-xs text-left">Simplertechnologies reserves the right to modify or update these terms at any time without prior notice.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Users will be informed of significant changes through email or website notifications.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Continued use of our services after modifications implies acceptance of the updated terms.</li>
            <li className="text-lg text-indigo-200/65 text-xs text-left">Users must review the updated terms regularly to stay informed.</li>

        <h2 className=" text-left mt-6 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-xl">Contact Information</h2>
        <p className="text-lg text-indigo-200/65 text-xs text-left">For any questions, concerns, or support requests regarding these terms, users can contact us.</p>
        <p className="text-lg text-indigo-200/65 text-xs text-left">By using Simplertechnologies' services, users acknowledge that they have read, understood, and agreed to these Terms and Conditions.</p>

        </div>
    </div>
  )
}

export default articletemp
