const TreatmentConcerns: React.FC = () => {
  const concerns = [
    "Skin Treatment",
    "Pregnancy",
    "Period Doubts",
    "Endometriosis",
    "Pelvic Pain",
    "Ovarian Cysts",
    "+ 5 More",
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg">
      <div className="text-lg w-full p-4 grad flex items-center justify-between">
        <h3 className="text-lg text-gray-700">The Concerns I Treat</h3>
      </div>
      <div className="flex p-4 flex-wrap gap-2">
        {concerns.map((concern, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-[#F7F7FC] text-act font-medium rounded-full text-sm border border-gray-200"
          >
            {concern}
          </span>
        ))}
      </div>
    </div>
  );
};
export default TreatmentConcerns;
