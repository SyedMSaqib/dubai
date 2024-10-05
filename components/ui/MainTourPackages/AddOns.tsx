import React from "react"
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox"

type AddOn = {
  id: string
  price: number
  name: string
  subTourInfoId: string
}

interface AdOnsProps {
  addOns: AddOn[]
}

export default function AdOns({ addOns }: AdOnsProps) {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([])
  const [selectedAddOns, setSelectedAddOns] = React.useState<AddOn[]>([])
  // console.log(selectedIds) // New state to store selected addOns
  console.log(selectedAddOns) // New state to store selected addOns

  // Handle value change
  const handleValueChange = (selected: string[]) => {
    setSelectedIds(selected)

    // Map selected ids to corresponding add-ons to get the prices and names
    const selectedSet = new Set(selected)
    const selectedDetails = addOns.filter((addon) => selectedSet.has(addon.id))

    setSelectedAddOns(selectedDetails) // Store selected add-ons in state
  }

  return (
    <div className="flex flex-col gap-3 relative">
      <CheckboxGroup color="warning" value={selectedIds} onValueChange={handleValueChange}>
        {addOns.map((addon) => (
          <Checkbox
            classNames={{
              base: "",
              wrapper:
                "before:border-black before:transition-colors group-data-[selected=true]:before:border-transparent",
              icon: "text-black",
            }}
            className="flex items-center"
            key={addon.id}
            value={addon.id}
          >
            <div className="flex justify-between items-center w-full">
              <span className="flex-1 w-[200px] md:w-[400px] font-normal">{addon.name}</span>
              <span className="ml-8 font-semibold text-right w-24">
                AED {addon?.price.toLocaleString()}
              </span>
            </div>
          </Checkbox>
        ))}
      </CheckboxGroup>
      <p className="text-default-500 text-small">
        Selected:
        {selectedAddOns.length > 0 ? (
          <span>
            {selectedAddOns.map((addon) => (
              <span key={addon.id}>
                {addon.name} - AED {addon?.price.toLocaleString()}
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
