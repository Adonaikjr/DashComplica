import { ContainerContent, ContainerHome } from '../Home/style'
import { useState } from 'react'
import { api } from '../../service'
import { toast } from 'react-toastify'

export function Config() {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageChange = (e: any) => {
    const file = e.target.files[0]
    setSelectedImage(file)
  }

  async function handleFormSubmit(e: any) {
    e.preventDefault()
    const UserLocal: any = localStorage.getItem('@user')
    const user = JSON.parse(UserLocal)
    if (selectedImage) {
      const formData = new FormData()
      formData.append('file', selectedImage)
      formData.append('userId', user.id)
      try {
        const response = await api.get('/users/avatar')
        const handleDeletImage = response.data?.filter((item: any) => {
          return item.userId === user.id
        })
        await api.delete(`/users/avatar/${handleDeletImage[0].id}`)

        await api.post('/users/avatar', formData)
        toast.success('Imagem atualizada')
      } catch (error) {
        console.log(error)
      }
      setSelectedImage(null)
    }
  }

  return (
    <ContainerHome>
      <ContainerContent>
        <h1>Configurações da conta</h1>
        <div>
          <h2>Enviar Imagem</h2>
          <form>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleFormSubmit}>Enviar</button>
          </form>
        </div>
      </ContainerContent>
    </ContainerHome>
  )
}
