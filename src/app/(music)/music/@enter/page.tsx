import EnterForm from "./EnterForm";
import EnterScene from "./EnterScene";

export const metadata = {
  title: "enter - music | kalynbeach",
  description: "Kalyn Beach Music",
};

export default function Enter() {
  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <div className="absolute -z-50 w-full h-full">
        <EnterScene />
      </div>
      <div className="z-50">
        <EnterForm />
      </div>
    </div>
  );
}
