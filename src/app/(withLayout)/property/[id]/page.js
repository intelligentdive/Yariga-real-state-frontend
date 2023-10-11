import PropertyDetails from "@/components/property/PropertyDetails";

const PropertyDetailsPage = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/${params.id}`);
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <PropertyDetails />
    </div>
  );
};

export default PropertyDetailsPage;
