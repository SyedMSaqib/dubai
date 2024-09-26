import React from "react"
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox"

export default function AdOns() {
  const [selected, setSelected] = React.useState([""])
  const addons = [
    { name: "Exciting Quad Bike Adventure", price: 50 },
    { name: "Traditional Camel Caravan Experience", price: 30 },
    { name: "Thrilling Dune Bashing Expedition", price: 70 },
    { name: "Adventurous Sandboarding on Golden Dunes", price: 20 },
    { name: "Breathtaking Hot Air Balloon Ride", price: 200 },
    { name: "Enchanting Desert Dinner Under the Stars", price: 60 },
    { name: "Intricate Henna Painting Session", price: 15 },
    { name: "Captivating Traditional Dance Performance", price: 40 },
    { name: "Personalized Photography Session in the Desert", price: 100 },
    { name: "Stunning Stargazing Experience Amidst the Dunes", price: 25 },
  ]

  return (
    <div className="flex flex-col gap-3 relative">
      <CheckboxGroup color="warning" value={selected} onValueChange={setSelected}>
        {addons.map((addon) => (
          <Checkbox
            classNames={{
              base: "",
              wrapper:
                "before:border-black before:transition-colors group-data-[selected=true]:before:border-transparent",
              icon: "text-black",
            }}
            className="flex items-center"
            key={addon.name}
            value={addon.name}
          >
            <div className="flex justify-between items-center w-full ">
              <span className="flex-1 w-[200px] md:w-[400px] font-normal">{addon.name}</span>
              <span className="ml-8 font-semibold text-right w-24">${addon.price}</span>
            </div>
          </Checkbox>
        ))}
      </CheckboxGroup>
      <p className="text-default-500 text-small">
        Selected:
        {selected.length > 0 ? (
          <span>
            {selected.map((item, index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))}
          </span>
        ) : (
          " None"
        )}
      </p>
    </div>
  )
}
