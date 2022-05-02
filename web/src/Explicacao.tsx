//Diz o que o propie deve receber, no caso uma string
interface ButtonProps{
  text?: string;
}

//Componente = uma função que retorna HTML
//E precisa iniciar com letra maiuscula
// sempre utilizar className pois class é uma palavra reservada do JS
function Button(propie: ButtonProps){
  return <button className="bg-blue-900 p-3 rounded text-white hover:bg-blue-500 transition-colors">{propie.text ?? 'Default'}</button>
}

//Propriedade = é o que se utiliza para diferenciar um do outro como txt dentro de um botao
function App() {
  return(
    <div className="flex gap-2">
      <Button text = "botao 0"/>
      <Button text = "botao 1"/>
      <Button text = "botao 2"/>
      <Button text = "botao 3"/>
      <Button/>
    </div>
  )
}

export default App


