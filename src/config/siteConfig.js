// src/config/siteConfig.js
import Services from './../pages/Services';

export const siteConfig = {
    brandName: "🌸 Serene Skin",
    brandTagline: "Find Peace and Healing",

    // colors: {
    //     primary: "#BFD8D2",        // Mint
    //     primaryHover: "#A6C5BC",   // Darker Mint
    //     secondary: "#F5EAEA",      // Soft Beige
    //     accent: "#E5DAF2",         // Lavender
    //     text: "#333333",           // Dark text
    //     subtext: "#666666",        // Lighter text
    //     background: "#FDFBF9",     // Page background
    //     surface: "#FFFFFF",        // Card BG
    //     border: "#DDD7D1",         // Borders
    //     error: "#D9534F",          // Errors
    //     success: "#4CAF50",        // Success
    // },

    meta: {
        title: "Tranquil Minds - Online Therapy Services",
        description:
            "Tranquil Minds offers compassionate online therapy for individuals and couples. Begin your healing journey today.",
        keywords:
            "therapy, mental health, online counseling, couples therapy, anxiety, stress",
        favicon: "/assets/favicon.png", // Optional favicon
    },

    navLinks: [
        { path: "/#home", label: "Home" },
        { path: "/#about", label: "About" },
        { path: "/#services", label: "Services" },
        { path: "/#testimonial", label: "Testimonials" },
        { path: "/#gallery", label: "Gallery" },
        { path: "/#contact", label: "Contact" },
    ],

    about: {
        shortDescription: "Hi, I'm a <span> dedicated therapist </span> here to support you on your path to healing and self-discovery. I offer a safe, understanding space where you can feel heard, valued, and empowered. Let’s take the first step toward peace and growth together.",
        longDescription: "Hello and welcome. I’m so glad you’re here.I’m a passionate therapist dedicated to helping individuals find healing, clarity, and strength through life’s most challenging moments. My mission is to create a safe, non-judgmental space where you can feel heard, supported, and empowered to grow. <br/>With a deep understanding of emotional well-being, I work with clients experiencing anxiety, stress, trauma, relationship struggles, and self-esteem issues. Whether you’re navigating a difficult transition or simply looking to better understand yourself, I’m here to walk alongside you. <br/> My approach combines compassion with proven therapeutic techniques to support your unique journey. Together, we’ll explore what’s holding you back and uncover ways to move forward with greater peace and purpose. <br/> You are not alone. Healing starts here.<br/> Let’s begin this journey — one step at a time."
    },

    services: [
        {
            title: "Skin Consultation",
            description: "Comprehensive evaluation to assess your skin health and needs.",
            icon: "🩺",
        },
        {
            title: "Acne Treatment",
            description: "Personalized plans to effectively treat and prevent acne.",
            icon: "🦠",
        },
        {
            title: "Anti-Aging Therapy",
            description: "Advanced therapies to reduce wrinkles and rejuvenate your skin.",
            icon: "✨",
        },
        {
            title: "Eczema Care",
            description: "Gentle, targeted treatments for eczema flare-ups and relief.",
            icon: "💧",
        },
        {
            title: "Skin Cancer Screening",
            description: "Early detection and prevention through regular skin checks.",
            icon: "🛡️",
        },
        {
            title: "Laser Therapy",
            description: "Safe laser treatments for various skin conditions and cosmetic needs.",
            icon: "🔆",
        },
        {
            title: "Pigmentation Correction",
            description: "Effective solutions to even skin tone and reduce dark spots.",
            icon: "🌞",
        },
        {
            title: "Cosmetic Procedures",
            description: "Professional cosmetic dermatology services to enhance your look.",
            icon: "🏥",
        },
    ],



    testimonials: {
        YoungAdults: [
            {
                name: "Meena Sharma",
                title: "Teacher",
                image: "assets/img/Testimonials/IndividualImagesWomen/pexels-brollwalamunda-13255605.jpg",
                message: "Pigmentation faded, and my skin feels youthful again. The doctor explained every step clearly. I left feeling informed, happy, and satisfied with the results. A very positive experience."
            },
            {
                name: "Daniel",
                title: "Business Consultant",
                image: "assets/img/Testimonials/IndividualImagesWomen/pexels-lubomir-satko-14868412-12437056.jpg",
                message: "Kind, skilled, and professional team. I felt comfortable and well cared for throughout my treatment. I’d absolutely recommend this clinic to anyone needing skin care support or solutions."
            },
            {
                name: "Lena & Oliver",
                title: "Engaged Partners",
                image: "assets/img/Testimonials/IndividualImagesWomen/pexels-vlada-karpovich-4873572.jpg",
                message: "We both loved the treatment and care we received. Visible results and a thoughtful approach made the experience excellent. It helped us feel our best before our special day together."
            },
            // {
            //     name: "Emily Parker",
            //     title: "Wellness Coach, BloomWell",
            //     image: "assets/img/Testimonials/IndividualImagesWomen/pexels-yankrukov-7693223.jpg",
            //     message: "Years of acne cleared in just weeks. Great treatment, personal care, and I feel confident again. A wonderful experience that truly made a difference in my daily life and self-esteem."
            // },
            // {
            //     name: "Clara Bennett",
            //     title: "HR Manager, Zenith Solutions",
            //     image: "assets/img/Testimonials/IndividualImagesWomen/Smiling Woman.jpg",
            //     message: "The doctor knew exactly what my skin needed. Results were amazing, and I feel great. Compliments haven’t stopped since the treatment. So grateful for the care and guidance I received."
            // },
            // {
            //     name: "James Carter",
            //     title: "Freelance Designer",
            //     image: "assets/img/Testimonials/IndividualImagesWomen/Young Man in Casual Attire.jpg",
            //     message: "Consultation to results—smooth and helpful. The staff was supportive, and my skin has never looked better. I really appreciated the personalized approach and follow-up care provided."
            // }
        ],

        OlderAdults: [
            {
                name: "Emily Parker",
                title: "Wellness Coach, BloomWell",
                image: "assets/img/Testimonials/OlderAdults/pexels-shvetsa-5257499.jpg",
                message: "Years of acne cleared in just weeks. Great treatment, personal care, and I feel confident again. A wonderful experience that truly made a difference in my daily life and self-esteem."
            },
            {
                name: "Clara Bennett",
                title: "HR Manager, Zenith Solutions",
                image: "assets/img/Testimonials/OlderAdults/pexels-a-darmel-7322082.jpg",
                message: "The doctor knew exactly what my skin needed. Results were amazing, and I feel great. Compliments haven’t stopped since the treatment. So grateful for the care and guidance I received."
            },
            {
                name: "James & Martha Carter",
                title: "Retired Couple",
                image: "assets/img/Testimonials/OlderAdults/pexels-alex-green-6625990.jpg",
                message: "Consultation to results—smooth and helpful. The staff was supportive, and our skin has never looked better. We really appreciated the personalized approach and follow-up care provided."
            }
        ],

        Children: [
            {
                name: "Mrs. Kavita Malhotra & Aarav (Age 10)",
                title: "Parent & Child",
                image: "/assets/img/Testimonials/Children/pexels-anna-pou-9345693.jpg",
                message: "My son's eczema improved quickly. The dermatologist was kind, skilled, and gentle. Aarav feels better and even enjoys visits now. It’s a relief to find care that really works for kids."
            },
            {
                name: "Neha Sharma & Twins (Age 6)",
                title: "Mother of Two",
                image: "assets/img/Testimonials/Children/pexels-jep-gambardella-6222761.jpg",
                message: "Both my kids got dry skin treatment here. Staff was friendly and made us feel at ease. The follow-up was great, and my children are now much more comfortable and happy in their skin."
            },
            {
                name: "Mr. Rohit Nair & Anaya (Age 5)",
                title: "Parent & Child",
                image: "assets/img/Testimonials/Children/pexels-akshay-bineesh-105199960-13676044.jpg",
                message: "We got excellent support for our daughter’s rash. She’s healing well and no longer fears doctor visits. The clinic was warm, patient, and perfect for kids needing skin care help."
            },
        ]
    },




    circularGallery: [
        {
            name: "Dr. Samuel Hayes",
            image: "/assets/img/Gallery/Therapist/pexels-shvetsa-4586740.jpg",
        },
        {
            name: "Dr. Sophia Miller",
            image: "/assets/img/Gallery/Therapist/pexels-gustavo-fring-7446684.jpg",
        },
        {
            name: "Dr. James Foster",
            image: "/assets/img/Gallery/Therapist/pexels-gustavo-fring-7446660.jpg",
        },
        {
            name: "Dr. Elena Moore",
            image: "/assets/img/Gallery/Therapist/pexels-karolina-grabowska-4506216.jpg",
        },
        {
            name: "Dr. Priya Shah",
            image: "/assets/img/Gallery/Therapist/pexels-mart-production-8076234.jpg",
        },
        {
            name: "Dr. Amir Rahman",
            image: "/assets/img/Gallery/Therapist/pexels-pavel-danilyuk-7108363.jpg",
        },
        {
            image: "/assets/img/Gallery/Therapist/pexels-shvets-production-7176224.jpg",
        },
        {
            image: "assets/img/Gallery/Therapist/pexels-cottonbro-7578803.jpg",
        },
        {
            image: "assets/img/Gallery/Therapist/pexels-jonathanborba-19550816.jpg",
        },
        {
            name: "Dr. Amir Rahman",
            image: "/assets/img/Gallery/Therapist/pexels-shvets-production-7176319.jpg",
        },
    ],

    contact: {
        email: "info@tranquilminds.com",
        phone: "+1 234 567 890",
        address: "123 Calm Street, Serenity City",
        socialLinks: {
            instagram: "https://instagram.com/tranquilminds",
            linkedin: "https://linkedin.com/in/tranquilminds",
        },
    },

    hours: {
        weekdays: "9am – 6pm",
        weekends: "10am – 2pm",
        closed: ["Sunday"],
    },

    bookingLink: "https://calendly.com/tranquilminds/therapy-session",
    themeMode: "light", // Optional for theme switch
};
