import imagePlaceholder from "@/assets/image-dummy.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="py-2 text-center space-y-8 overflow-x-scroll">
      <Card className=" shadow-lg rounded-md space-y-4 px-1 py-2">
        <CardContent className="flex items-center p-2 shadow-sm shadow-slate-300 rounded-md">
          <Avatar className=" size-16 border border-slate-500">
            <AvatarImage src={imagePlaceholder} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <p>Jamia Islamia Rowjatul Ulum Madrasa</p>
            <small>Hat Govindpur, Faridpur</small>
          </div>
        </CardContent>
        <CardContent className="flex items-center p-2 shadow-sm shadow-slate-300 rounded-md">
          <Avatar className=" size-16 border border-slate-500">
            <AvatarImage src={imagePlaceholder} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <p>Jamia Islamia Rowjatul Ulum Madrasa</p>
            <small>Hat Govindpur, Faridpur</small>
          </div>
        </CardContent>

        <Button className="self-center mt-6 mb-2">Add new madrasa</Button>
      </Card>

      <Card className="p-2 rounded-md shadow-lg">
        <CardTitle className="border border-gray-400 rounded-md py-1 px-2 bg-slate-100 text-md font-medium">
          Your work
        </CardTitle>
        <CardContent className="grid grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white size-20 shadow-md rounded-sm border border-gray-500"></div>
            <p>Nurani Class one</p>
            <small>Bangla Question</small>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white size-20 shadow-md rounded-sm border border-gray-500"></div>
            <p>Nurani Class one</p>
            <small>Bangla Question</small>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white size-20 shadow-md rounded-sm border border-gray-500"></div>
            <p>Nurani Class one</p>
            <small>Bangla Question</small>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white size-20 shadow-md rounded-sm border border-gray-500"></div>
            <p>Nurani Class one</p>
            <small>Bangla Question</small>
          </div>
        </CardContent>

        <Button className="self-center my-2">Add new work</Button>
      </Card>
    </div>
  );
};

export default Home;
