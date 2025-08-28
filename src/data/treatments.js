const treatments = [
    {
      id: 1,
      name: "Panchakarma",
      shortDescription: "A comprehensive detoxification and rejuvenation program to cleanse the body.",
      description: "Panchakarma is the ultimate mind-body healing experience for detoxifying the body, strengthening the immune system, and restoring balance and well-being. It is one of the most effective healing modalities in Ayurvedic medicine.",
      image: "/assets/treatment1.jpg",
      ailments: ["Stress", "Digestive Issues", "Chronic Fatigue", "Arthritis"],
      benefits: [
        "Removes toxins from the body",
        "Reduces stress and promotes relaxation",
        "Enhances immunity",
        "Improves digestion and metabolism",
        "Promotes mental clarity"
      ],
      process: "Panchakarma involves five therapeutic treatments: Vamana (therapeutic emesis), Virechana (therapeutic purgation), Basti (enema therapy), Nasya (nasal administration), and Raktamokshana (bloodletting therapy). Before these therapies, preparatory procedures like Snehana (oil massage) and Swedana (steam therapy) are performed to prepare the body.",
      duration: "7-21 days",
      price: 1200
    },
    {
      id: 2,
      name: "Abhyanga",
      shortDescription: "A full-body warm oil massage that nourishes and rejuvenates the body.",
      description: "Abhyanga is a traditional Ayurvedic massage using warm herbal oils tailored to your constitution. This treatment promotes deep relaxation, improves circulation, and nourishes the tissues.",
      image: "/assets/treatment2.jpg",
      ailments: ["Stress", "Insomnia", "Dry Skin", "Muscle Tension"],
      benefits: [
        "Promotes relaxation and reduces stress",
        "Improves circulation",
        "Nourishes and softens the skin",
        "Reduces muscle tension",
        "Promotes better sleep"
      ],
      process: "During Abhyanga, warm herbal oil is applied to the entire body with a gentle, rhythmic massage. Special attention is given to vital energy points (marmas) to release energy blockages. The massage is followed by a warm bath or steam to enhance the benefits.",
      duration: "60-90 minutes",
      price: 120
    },
    {
      id: 3,
      name: "Shirodhara",
      shortDescription: "A continuous flow of warm oil on the forehead to induce deep relaxation.",
      description: "Shirodhara involves a continuous stream of warm herbal oil poured onto the forehead, specifically the 'third eye' area. This deeply relaxing treatment calms the mind, improves mental clarity, and is excellent for stress-related conditions.",
      image: "/assets/treatment3.jpg",
      ailments: ["Stress", "Anxiety", "Insomnia", "Headaches"],
      benefits: [
        "Induces deep relaxation",
        "Calms the nervous system",
        "Improves mental clarity",
        "Enhances quality of sleep",
        "Relieves stress and anxiety"
      ],
      process: "The client lies on a massage table while warm oil is poured in a steady stream onto the forehead from a hanging vessel. The therapist may also incorporate a gentle scalp massage. The treatment typically follows an Abhyanga massage for maximum benefit.",
      duration: "45-60 minutes",
      price: 95
    },
    {
      id: 4,
      name: "Nasyam",
      shortDescription: "Nasal administration of herbal oils to clear the sinuses and revitalize the mind.",
      description: "Nasyam is an Ayurvedic treatment involving the administration of herbal oils, powders, or pastes through the nasal passages. It's particularly effective for conditions affecting the head, neck, and sinuses.",
      image: "/assets/treatment4.jpg",
      ailments: ["Sinus Congestion", "Allergies", "Headaches", "Facial Paralysis"],
      benefits: [
        "Clears sinus congestion",
        "Improves breathing",
        "Enhances mental clarity",
        "Strengthens sensory organs",
        "Alleviates headaches"
      ],
      process: "The treatment begins with a gentle facial massage and steam to prepare the nasal passages. Medicated oils or herbal extracts are then administered into the nostrils while the client is in a reclined position. After a brief rest, any excess oil is drained out.",
      duration: "30-45 minutes",
      price: 85
    },
    {
      id: 5,
      name: "Pizhichil",
      shortDescription: "A luxurious treatment where warm oil is continuously poured over the body.",
      description: "Pizhichil, also known as 'oil bath,' combines massage with the pouring of warm herbal oil all over the body. This royal treatment is deeply rejuvenating and is excellent for neurological conditions, arthritis, and overall strengthening.",
      image: "/assets/treatment5.jpg",
      ailments: ["Arthritis", "Joint Pain", "Neurological Disorders", "Muscle Weakness"],
      benefits: [
        "Strengthens muscles and joints",
        "Improves circulation",
        "Nourishes tissues",
        "Relieves pain and inflammation",
        "Rejuvenates the nervous system"
      ],
      process: "During Pizhichil, two or more therapists squeeze warm herbal oil from cloth bundles over the client's body while simultaneously performing a gentle massage. The continuous flow of oil combined with massage creates a unique therapeutic effect.",
      duration: "60-90 minutes",
      price: 150
    },
    {
      id: 6,
      name: "Kati Basti",
      shortDescription: "A specialized treatment for lower back pain using warm oil retained in a dough ring.",
      description: "Kati Basti is a specialized treatment targeting the lower back region. A dough ring is placed on the lower back and filled with warm medicated oil, which is retained for a period of time to penetrate deeply and heal tissues.",
      image: "/assets/treatment6.jpg",
      ailments: ["Lower Back Pain", "Sciatica", "Disc Problems", "Lumbar Spondylosis"],
      benefits: [
        "Relieves lower back pain",
        "Strengthens the spine",
        "Nourishes spinal discs",
        "Reduces inflammation",
        "Improves mobility"
      ],
      process: "A ring made from gram flour dough is placed on the lower back. Warm medicated oil is then poured into this ring and retained for 30-45 minutes, allowing deep penetration into the tissues. The treatment may be followed by a gentle massage of the area.",
      duration: "45-60 minutes",
      price: 110
    }
  ];
  
  export default treatments;