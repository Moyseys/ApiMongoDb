import CachorroController from '../controllers/CachorroController'


describe('Cachorro controller', () => {
  let server: any
  let port: number = 3000
  beforeAll(async () => {
    console.log('Before all')
  })

  afterAll(async () => {
  })

  it('Should return all dogs from the database', async () => {
    const response = await fetch(`http://localhost:${port}/cachorro`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
    
    const responseJson = await response.json()
    expect(response.status).toBe(200)
    expect(responseJson.length >= 0).toBe(true)
  })

  // it('Should add a new dog to the database', async () => {
  //   const newDog = {
  //     nome: 'Rex',
  //     raça: 'Labrador',
  //     idade: '2019-05-15',
  //     cor: 'Amarelo',
  //   };
  
  //   const response = await fetch(`http://localhost:${port}/cachorro`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     method: 'POST',
  //     body: JSON.stringify(newDog),
  //   })
  
  //   const responseJson = await response.json()
  //   expect(response.status).toBe(200)
  //   expect(responseJson).toHaveProperty('success')
  //   expect(responseJson.success).toBe('Cachorro cadastrado com sucesso!')
  // })
})
