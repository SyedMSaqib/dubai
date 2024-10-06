import React from "react"
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox"
import { useAppDispatch } from "@/lib/Redux/hooks"
import { AddaddOns } from "@/lib/Redux/features/peopleModal"

type AddOn = {
  id: string
  price: number
  name: string
  subTourInfoId: string
}
// Create a new type that includes quantity
type AddOnWithQuantity = AddOn & {
  quantity: number
}

interface AdOnsProps {
  addOns: AddOn[]
}

export default function AdOns({ addOns }: AdOnsProps) {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([])
  const [selectedAddOns, setSelectedAddOns] = React.useState<AddOnWithQuantity[]>([])
  const [quantities, setQuantities] = React.useState<{ [key: string]: number }>({})

  const dispatch = useAppDispatch()

  const handleValueChange = (selected: string[]) => {
    setSelectedIds(selected)

    // Map selected ids to corresponding add-ons with quantities
    const selectedSet = new Set(selected)
    const selectedDetails = addOns
      .filter((addon) => selectedSet.has(addon.id))
      .map((addon) => ({
        ...addon,
        quantity: quantities[addon.id] || 1, // Default quantity of 1 for newly selected items
      }))

    setSelectedAddOns(selectedDetails)
    dispatch(AddaddOns(selectedDetails))
  }

  const handleQuantityChange = (id: string, change: number) => {
    const newQuantity = Math.max((quantities[id] || 1) + change, 1)
    const newQuantities = { ...quantities, [id]: newQuantity }
    setQuantities(newQuantities)

    // Update selected add-ons with new quantity
    const updatedSelectedAddOns = selectedAddOns.map((addon) =>
      addon.id === id ? { ...addon, quantity: newQuantity } : addon
    )
    setSelectedAddOns(updatedSelectedAddOns)
    dispatch(AddaddOns(updatedSelectedAddOns))
  }

  return (
    <div className="flex flex-col gap-3 relative">
      <CheckboxGroup color="warning" value={selectedIds} onValueChange={handleValueChange}>
        {addOns.map((addon) => (
          <div key={addon.id} className="flex justify-between items-center ">
            <Checkbox
              classNames={{
                base: "",
                wrapper:
                  "before:border-black before:transition-colors group-data-[selected=true]:before:border-transparent",
                icon: "text-black",
              }}
              className="flex items-center"
              value={addon.id}
            >
              <div className="flex-1 flex items-center justify-between w-full">
                <span className="flex-1 font-normal">{addon.name}</span>
              </div>
            </Checkbox>

            <div className="flex items-center gap-1  whitespace-nowrap">
              {selectedIds.includes(addon.id) && (
                <div className="flex items-center gap-4">
                  <button
                    className="bg-black text-white text-lg font-bold w-6 h-6 rounded-full flex items-center justify-center"
                    onClick={() => handleQuantityChange(addon.id, -1)}
                  >
                    -
                  </button>
                  <span className="text-lg">{quantities[addon.id] || 1}</span>
                  <button
                    className="bg-black text-white text-lg font-bold w-6 h-6 rounded-full flex items-center justify-center"
                    onClick={() => handleQuantityChange(addon.id, 1)}
                  >
                    +
                  </button>
                </div>
              )}
              <span className=" font-semibold">AED {addon?.price.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </CheckboxGroup>
      <p className="text-default-500 text-small">
        Selected:
        {selectedAddOns.length > 0 ? (
          <span>
            {selectedAddOns.map((addon) => (
              <span key={addon.id}>
                {addon.name} - {quantities[addon.id] || 1} x AED {addon?.price.toLocaleString()} =
                AED {((quantities[addon.id] || 1) * addon.price).toLocaleString()}
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
