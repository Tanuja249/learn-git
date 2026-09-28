import React from 'react'
import Card from './components/Card'


const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    companyName: "Google",
    post: "Frontend Developer",
    datePosted: "2 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2012/09/2a34d8_0780274467a2423dad8f53021b21caadmv2.png?fit=376%2C375&quality=80&ssl=1",
    companyName: "Microsoft",
    post: "Software Engineer",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    companyName: "Meta",
    post: "React Developer",
    datePosted: "1 week ago",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    companyName: "Apple",
    post: "iOS Software Engineer",
    datePosted: "10 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    companyName: "Amazon",
    post: "Backend Developer",
    datePosted: "3 weeks ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$38/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
    companyName: "Netflix",
    post: "Full Stack Engineer",
    datePosted: "6 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Remote"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "NVIDIA",
    post: "AI/ML Engineer",
    datePosted: "4 weeks ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$78/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDk6qGNbC_Ru_5ov-OABNjT0_NeOWm9b82sgfRmpNt0HjmqwZ54OEY4o0&s",
    companyName: "Adobe",
    post: "UI/UX Developer Intern",
    datePosted: "2 weeks ago",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$30/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Oracle",
    post: "Java Developer",
    datePosted: "5 weeks ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "OpenAI",
    post: "AI Software Engineer",
    datePosted: "1 day ago",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "San Francisco, USA"
  }
];
console.log(jobOpenings);
  return (
   
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){
      return <div key={idx}>
        <Card  company={elem.companyName}  post={elem.post} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} brandLogo={elem.brandLogo} pay={elem.pay} location={elem.location} />
         </div>

      })}
      
        
    </div>
    
  )
}

export default App