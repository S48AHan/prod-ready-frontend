import Divider from "../../../components/Divider";
import Tag from "../../../components/Tag";
import FeatureContainer from "./FeatureContainer";

const Composition = () => {
  return (
    <>
      <FeatureContainer title="Introduction To C++">
        <p className="text-xl text-shadow-amber-100 font-bold text-gray-800">
          C++ is a powerful, general-purpose programming language developed by
          Bjarne Stroustrup in 1979 at Bell Labs. It was created as an extension
          of the C programming language by adding features such as classes and
          objects, making it suitable for both procedural and object-oriented
          programming.{" "}
        </p>
        <Divider />
        <div className="flex flex-row gap-2">
          <Tag text="Bangla" type="bn"/>
          <Tag text="English" type="en"/>
          <Tag text="Hindi" type="in"/>
        </div>
      </FeatureContainer>
    </>
  );
};

export default Composition;
