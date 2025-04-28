import React from "react";
import { FaMailchimp, FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import topImage from "../../assets/contact/hawa-mahal.webp";
import img1 from "../../assets/contact/dubai.webp";
import img2 from "../../assets/contact/pune.webp";
import img3 from "../../assets/contact/lucknow.webp";
import img4 from "../../assets/contact/hyderabad.webp";
import img5 from "../../assets/contact/noida.webp";
import img6 from "../../assets/contact/delhi.webp";
import img7 from "../../assets/contact/agra.webp";
import img8 from "../../assets/contact/aurangabad.webp";
import img9 from "../../assets/contact/mumbai.webp";
import img10 from "../../assets/contact/indore-ofc.webp";
import img11 from "../../assets/contact/ahmedabad-ofc.webp";
import ContactCard from "./ContactCard";
const ContactPage = () => {
  const contactdata = [
    {
      office: "Meridean Overseas - Dubai",
      subTitle:
        "Office Number 307, 3rd Floor, Millennium Central Downtown, Al Asayel St - Business Bay - Dubai",
      phone: "+97 1507 167 689",
      location: "location",
      img: img1,
    },
    {
      office: "Meridean Overseas - Pune",
      subTitle:
        "302, Dnyanshobha, Plot no 48, Opp kurtkoti nursing home Bhusari colony, Kothrud, Pune - 411038",
      phone: "1800123000011",
      phone2: "077588 20670",
      location: "location",
      img: img2,
    },
    {
      office: "Meridean Overseas - Lucknow",
      subTitle:
        "Shop no. 1 Sana palace 1 Ground Floor Shahnajaf Rd, opposite to Saharaganj Mall, Prem Nagar, Hazratganj Lucknow, Uttar Pradesh, 226001",
      phone: "1800123000011",
      phone2: "083036 94977",
      location: "location",
      img: img3,
    },

    {
      office: "Meridean Overseas - Hyderabad",
      subTitle:
        "Door No. 6-3-1093, Space No. 401, 4th Floor V.V. Vintage Boulevard Raj Bhavan Road, Hyderabad - 500082",
      phone: "1800123000011",
      phone2: "081717 81701",
      location: "location",
      img: img4,
    },
    {
      office: "Meridean Overseas - Noida",
      subTitle:
        "503 & 504 on 5th floor Ocean heights K-4, Sector 18, Noida Uttar Pradesh 201301",
      phone: "1800123000011",
      phone2: "089059 98503",
      location: "location",
      img: img5,
    },
    {
      office: "Meridean Overseas - Delhi",
      subTitle:
        "3rd floor, 20, Najafgarh Rd, Block A, Raja Garden Delhi, 110015, India",
      phone: "1800123000011",
      phone2: "097733 93836",
      location: "location",
      img: img6,
    },
    {
      office: "Meridean Overseas - Agra",
      subTitle:
        "6/2/1 Second Floor, Awagarh House, Mahatma Gandhi Rd, Opp. Anjna Cinema, Agra, Uttar Pradesh. 282002",
      phone: "1800123000011",
      phone2: "070609 78882",
      location: "location",
      img: img7,
    },
    {
      office: "Meridean Overseas - Aurangabad",
      subTitle:
        "Sai Aspire, Office no. 401/402, 4th floor, Opp. Shri Guru Tegh Bahadur English High School, Near Sant Eknath Rang Mandir, New Usmanpura, Chhatrapati Sambhaji Nagar, Maharashtra 431005",
      phone: "1800123000011",
      phone2: "097733 41357",
      location: "location",
      img: img8,
    },
    {
      office: "Meridean Overseas - Mumbai",
      subTitle:
        "A109, meridean overseas education consultants, Everson chs, 1st floor, D.n. nagar metro station,l junction, Andheri west Mumbai 400058",
      landmark: "Landmark : Next to h.p. petrol station",
      phone: "1800123000011",
      phone2: "97733 90927",
      location: "location",
      img: img9,
    },
    {
      office: "Meridean Overseas - Indore",
      subTitle:
        "Office no. 203, Second floor, The Heritage, 582, Mahatma Gandhi Rd, opposite hukumchand ghantaghar, New Palasia, Indore, Madhya Pradesh 452001",

      phone: "1800123000011",
      phone2: "083069 92194",
      location: "location",
      img: img10,
    },
    {
      office: "Meridean Overseas - Ahmedabad",
      subTitle:
        "Office No. 303, 3rd Floor, ATP Arcade Building Nr. National Handloom, Law Garden, Navrangpura, Ahmedabad, Gujrat, 380009",

      phone: "1800123000011",
      phone2: "097733 59609",
      location: "location",
      img: img11,
    },
  ];

  return (
    <div className="bg-blue-seondary">
      <div className="max-w-screen-lg mx-auto py-10 space-y-3 px-2">
        {/* link */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="font-medium text-blue-dark text-xl font-poppins"
          >
            Home
          </Link>
          <MdArrowForwardIos className="font-bold font-poppins" />
          <Link
            to="/contact"
            className="font-medium text-red-primary text-xl font-poppins"
          >
            Contact
          </Link>
        </div>
        {/* text */}
        <div className="mt-6 space-y-4">
          <h1 className="text-3xl md:text-5xl font-medium font-oswald text-blue-dark">
            We're Here, Let's Talk
          </h1>
          <p className="text-lg text-gray-700 font-poppins">
            We believe in being the best ally to our students. When we say,
            "quality education is a right and not a luxury," we mean it in every
            sense. No matter what's bothering you, Our experienced counsellors
            of the top study abroad destinations are here to solve your every
            doubt regarding studying abroad. Call us at any time or stop by one
            of our branches to see us.
          </p>
        </div>
        {/* head */}
        <div className="mt-8">
          <h1 className="text-3xl md:text-4xl font-medium font-oswald text-blue-dark">
            Head Office
          </h1>
          <div className="w-40 h-1 mt-2 bg-red-primary" />
        </div>
        <div className="mt-8 space-y-4">
          <h2 className="text-xl md:text-3xl font-medium font-oswald text-gray-700">
            Meridean Overseas - Jaipur
          </h2>
          <p className="text-gray-600 font-medium font-poppins text-lg">
            Plot no 7, Vaishali Marg, Ganga Sagar-B, Vaishali Nagar, Jaipur,
            Rajasthan - 302021
          </p>
          <span className="flex items-center flex-wrap gap-2 text-blue-500">
            <span className="flex items-center gap-2">
              <FaPhoneVolume />
              <a href="">1800123000011</a>
            </span>
            <span className="flex items-center gap-2">
              <IoMail />

              <a href="">application02@meridean.org</a>
            </span>
          </span>
        </div>
        {/* location */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <img src={topImage} alt="" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6237878239735!2d75.7308857754396!3d26.91543237664553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db49e382c696d%3A0x40267e56404d31a8!2sMeridean%20Overseas%20Education%20Consultants%20in%20Jaipur%20(Study%20Abroad%20Consultants%20and%20Coaching%20for%20IELTS%2CGRE%2CGMAT%20and%20SAT)!5e0!3m2!1sen!2sbd!4v1745820956207!5m2!1sen!2sbd"
              style={{
                border: "5px solid #a9aaac", // 10px thick, solid black
                borderRadius: "6px", // optional: rounded corners
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-3xl md:text-4xl font-medium font-oswald text-blue-dark">
            Branch Offices
          </h1>
          <div className="w-40 h-1 mt-2 bg-red-primary" />
        </div>

        <div className="mt-10">
          <ContactCard contactdata={contactdata} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
