import imagePlaceholder from "@/assets/image-dummy.svg";
import RenderListItems from "@/components/render-list-items";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent } from "@/components/ui/card";
import { IMadrasa } from "@/interfaces/madrasa";

const MadrasaCard = ({ madrasa }: { madrasa: IMadrasa }) => {
  return (
    <CardContent className="flex items-center p-2 shadow-sm shadow-slate-300 rounded-md border border-slate-300">
      <Avatar className=" size-16 border border-slate-500">
        <AvatarImage src={imagePlaceholder} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex flex-col ml-2 justify-center flex-grow">
        <p className="text-center">{madrasa.name}</p>
        <small className="text-center">{madrasa.address}</small>
      </div>
    </CardContent>
  );
};

const MadrasaList = ({ madrasas }: { madrasas: IMadrasa[] }) => {
  return (
    <RenderListItems
      items={madrasas}
      renderItem={(madrasa: IMadrasa) => (
        <MadrasaCard
          madrasa={madrasa}
          key={madrasa.id}
        />
      )}
      className="space-y-6"
    />
  );
};

export default MadrasaList;
