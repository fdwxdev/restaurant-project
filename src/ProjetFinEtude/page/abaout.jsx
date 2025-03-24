import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='pt-16 h-svh bg-cover bg-center' style={{ backgroundImage: 'url(/aboutus.jpg)' }}>
      
      <h1 className='text-center font-serif text-5xl text-white underline' >About us</h1>
      <p className='text-2xl  text-center  w-2/5 m-auto mt-16  font-bold text-white '>Bienvenue sur DAWQ, votre solution innovante pour la gestion des restaurants. Nous facilitons la gestion des commandes, des réservations et du suivi des stocks grâce à une interface intuitive et performante.
Notre objectif est d’aider les restaurateurs à optimiser leur service, améliorer l’expérience client et simplifier leurs opérations quotidiennes. Avec DAWQ, gagnez du temps et concentrez-vous sur l’essentiel : offrir une expérience culinaire exceptionnelle !
Rejoignez-nous et découvrez comment notre plateforme peut transformer la gestion de votre restaurant.</p>
<div>
  <button className='rounded-lg shadow-2xl bg-gradient-to-r from-orange-500 via-orange-900 to-amber-400 hover:bg-amber-300'>jhhggfdsrtuijbvcft</button>
</div>

    </div>
  )
}
