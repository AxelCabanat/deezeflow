const questionsData = [
	{
		question: 'Comment s’annonce ta journée ?',
		answers: [
			{
				title: 'Faut que j’aille à la CAF',
				mood: 'colère'
			},
			{
				title: 'Je dois payer mes impôts',
				mood: 'tristesse'
			},
			{
				title: 'Erreur de la banque en ma faveur',
				mood: 'joie'
			},
			{
				title: 'Tequila, heineken, pô l’temps d’niaiser',
				mood: 'fiesta'
			},
			{
				title: 'J’ai un exam demain',
				mood: 'concentration'
			},
			{
				title: 'Je vais à la salle',
				mood: 'sport'
			},
			{
				title: 'Skyrim',
				mood: 'skyrim'
			}
		]
	},
	{
		question: 'Quelle a été la première chose que tu as fait ce matin ?',
		answers: [
			{
				title: 'Me cogner le pied dans la porte',
				mood: 'colère'
			},
			{
				title: 'Pleurer sous la douche',
				mood: 'tristesse'
			},
			{
				title: 'J’ai mangé un bon ptit dej… Et j’ai kiffé.',
				mood: 'joie'
			},
			{
				title: 'Je me suis mis du son pour m’ambiancer',
				mood: 'fiesta'
			},
			{
				title: 'J’ai tapé ma meilleure pose de yoga',
				mood: 'concentration'
			},
			{
				title: 'Je suis parti faire DU SPORT !!!',
				mood: 'sport'
			},
			{
				title: 'Skyrim',
				mood: 'skyrim'
			}
		]
	},
	{
		question: 'Qu’est-ce que tu comptes faire ce soir ?',
		answers: [
			{
				title: 'Gardav’',
				mood: 'colère'
			},
			{
				title: 'Pleurer sous la couette',
				mood: 'tristesse'
			},
			{
				title: 'J’ai un date et ça va être chouette',
				mood: 'joie'
			},
			{
				title: 'Cellule de dégrisement',
				mood: 'fiesta'
			},
			{
				title: 'Réviser encore et toujours',
				mood: 'concentration'
			},
			{
				title: 'Manger mon riz dinde',
				mood: 'sport'
			},
			{
				title: 'Skyrim',
				mood: 'skyrim'
			}
		]
	},
	{
		question: 'Est-ce que tu as bien dormi ?',
		answers: [
			{
				title: 'Mon chat m’a pissé dessus',
				mood: 'colère'
			},
			{
				title: 'J’ai fait un cauchemar ',
				mood: 'tristesse'
			},
			{
				title: 'J’ai dormi comme un bébé.',
				mood: 'joie'
			},
			{
				title: 'Dor-quoi ? hic',
				mood: 'fiesta'
			},
			{
				title: 'J’ai fait une séance d’hypnose',
				mood: 'concentration'
			},
			{
				title: 'Non, j’ai besoin de me défouler',
				mood: 'sport'
			},
			{
				title: 'A ton avis ? Skyrim',
				mood: 'skyrim'
			}
		]
	},
	{
		question: 'Si là,maintenant, tu pouvais boire quelque chose, qu’est-ce que tu choisirais ?',
		answers: [
			{
				title: 'Un shot de vodka ',
				mood: 'colère'
			},
			{
				title: 'Peu importe tant que je peux noyer mon chagrin',
				mood: 'tristesse'
			},
			{
				title: 'Une boisson bien fraîche pour me rappeler cet été',
				mood: 'joie'
			},
			{
				title: 'Tout ce qui me passe sous la main',
				mood: 'fiesta'
			},
			{
				title: 'Un petit thé matcha ',
				mood: 'concentration'
			},
			{
				title: 'Une boisson isotonique',
				mood: 'sport'
			},
			{
				title: 'Je m’hydrate avec Skyrim ',
				mood: 'skyrim'
			}
		]
	},
	{
		question: 'Quelle est la prochaine vidéo youtube que tu vas regarder ? ',
		answers: [
			{
				title: 'Je ne veux pas rater ça',
				type: 'button'
			},
			{
				title: 'suivant',
				type: 'button'
			}
		]
	},
	{
		question: `Nous travaillons sur le projet depuis des mois et tout est presque prêt.  

    Mais pour que ce soit un vrai succès, nous avons besoin de 2 choses :  
     
    1. Votre retour sur les fonctionnalités du projet :  
    Faîtes partie du projet avec nous ! En mode testeur vous pouvez : 
    - Suivez les étapes du projet 
    
    Donner votre avis sur les différentes fonctionnalités `,
		answers: [
			{
				title: 'ok cool ! Et quoi d’autre ?? ',
				type: 'button'
			},
			{
				question: ` 
        2. Nous avons besoin d’un gros budget. Ce que nous n’avons pas étant encore une petite structure indépendante.  
        
         
        Nous avons donc décidé de faire appel aux personnes qui croient au projet en lançant une campagne de crowdfunding.  
        
        En nous aidant à atteindre notre objectif, vous recevez une contrepartie à hauteur de votre investissement ! Cela peut tout changer !  
         
         
        Vous souhaitez participez à la campagne de crowdfunding qui sera lancée dans quelques semaines ?`,
				answers: [
					{
						title: 'Ok pourquoi pas !',
						type: 'button',
						resp: 'Merci c’est TOP !'
					},
					{
						title: 'Non, je ne souhaite pas participer.',
						type: 'button',
						resp: 'ok merci ! On espère rester en contact. Merci de nous avoir aidé jusqu’ici, c’est top !'
					}
				]
			}
		]
	}
];

export default questionsData;
