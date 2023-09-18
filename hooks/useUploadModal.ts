 import { create } from "zustand"

 interface IUploadModal {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
 }

 const useUploadModal = create<IUploadModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true}),
  onClose: () => set({ isOpen: false})
 }))
 
 export default useUploadModal