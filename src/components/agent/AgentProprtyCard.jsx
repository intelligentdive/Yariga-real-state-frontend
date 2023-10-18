import PropertyCard from "../property/PropertyCard";
import PropertyFilter from "../property/PropertyFilter";

const AgentProprtyCard = async () => {
  const res = await fetch("http://localhost:5000/property");
  const data = await res.json();
  const properties = data?.slice(0, 4);

  return (
    <div className="mt-5">
      {/* property content */}

      <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-x-[65px] gap-y-6 mt-[25px]">
        {properties?.map((item) => (
          <PropertyCard key={item.id} property={item} />
        ))}
      </div>
    </div>
  );
};

export default AgentProprtyCard;
