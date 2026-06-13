import Image from "next/image";
import { MenuItem } from "@/lib/types";
import Badge from "@/components/ui/Badge";
import { Leaf, WheatOff } from "lucide-react";

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
      {item.image_url && (
        <div className="relative h-44 overflow-hidden">
          <Image
            src={item.image_url}
            alt={item.name_fr}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute top-2 left-2 flex gap-1.5 flex-wrap">
            {item.is_popular && <Badge variant="popular">Populaire</Badge>}
            {item.is_new && <Badge variant="new">Nouveauté</Badge>}
          </div>
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-serif text-[#2C1810] font-bold text-base leading-snug">
            {item.name_fr}
          </h3>
          <span className="font-serif text-[#C9A84C] font-bold text-lg shrink-0">
            {item.price.toFixed(2)} $
          </span>
        </div>
        {item.description_fr && (
          <p className="text-gray-500 text-sm leading-relaxed flex-1">
            {item.description_fr}
          </p>
        )}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
          {item.is_vegetarian && (
            <span className="flex items-center gap-1 text-green-600 text-xs font-medium">
              <Leaf size={12} />
              Végétarien
            </span>
          )}
          {item.is_gluten_free && (
            <span className="flex items-center gap-1 text-blue-600 text-xs font-medium">
              <WheatOff size={12} />
              Sans gluten
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
