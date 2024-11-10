import React from "react";
import "../assets/styles.css"; // CSS file for styling

function Services() {
  const serviceData = [
    {
      imgSrc: "https://www.maxvets.com/wp-content/uploads/2018/08/service-page-images-grooming.jpg",
      title: "Grooming",
      description: "Professional grooming services to keep your pets looking their best."
    },
    {
      imgSrc: "https://media.istockphoto.com/id/1386939001/photo/young-man-and-his-dog-walking-on-a-rainy-day.jpg?b=1&s=612x612&w=0&k=20&c=tD-utjL7TfcLbDypef0dZk9QOPdIcmniNh8saVy5waI=",
      title: "Dog Walking",
      description: "Regular walks to keep your dogs healthy and happy."
    },
    {
      imgSrc: "https://pawspace.in/wp-content/uploads/2024/01/pet-sitting-service-bangalore.webp",
      title: "Pet Sitting",
      description: "Reliable pet sitting services when you're away."
    },
    {
      imgSrc: "https://www.hartz.com/wp-content/uploads/2021/10/Dog-Training-Basics-2.jpg",
      title: "Training",
      description: "Expert training programs to help your pets learn good behavior."
    },
    {
      imgSrc: "https://matravilleveterinarypractice.com.au/wp-content/uploads/2023/06/cat-checkup.jpg",
      title: "Veterinary Care",
      description: "Comprehensive veterinary services to keep your pets healthy."
    },
    {
      imgSrc: "https://pawspace.in/wp-content/uploads/2024/02/AnvisInc-f.jpg",
      title: "Boarding",
      description: "Safe and comfortable boarding for your pets while you're away."
    }
  ];

  return (
    <section id="services">
      <h2 style={{ textAlign: "center", color: "#fff" }}>Our Services</h2>
      <div className="service-container">
        {serviceData.map((service, index) => (
          <ServiceItem
            key={index}
            imgSrc={service.imgSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

function ServiceItem({ imgSrc, title, description }) {
  return (
    <div className="service-item">
      <img src={imgSrc} alt={`${title} Service`} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Services;
