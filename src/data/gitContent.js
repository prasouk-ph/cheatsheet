export const gitContent = [
  {
    title: "Configuration",
    content: {
      syntaxes: [
        {
          code:
`git --version`,
          comments:
`Pour vérifier la version de git
Si pas installé, le proposera`
        },
        {
          code:
`which git`,
          comments:
`Pour vérifier si installé`
        },
        {
          code:
`git config --list`,
          comments:
`Pour voir la configuration`
        },
        {
          code:
`git config --global user.name "NomVoulu"`,
          comments:
`Pour définir le nom d'utilisateur`
        },
        {
          code:
`git config --global user.email emailVoulu`,
          comments:
`Pour définir le mail d'utilisateur`
        },
        {
          code:
`git remote add origin lienHébergeur
git branch -M nouveau_nom_de_la_branche`,
          comments:
`Pour définir le site hébergeur
Pour renommer la branche actuelle`
        },
        {
          code:
`git status`,
          comments:
`Pour mettre à jour git`
        },
        {
          code:
`git init`,
          comments:
`Pour utiliser git dans un dossier`
        }
      ],
    },
    category: "Configuration"
  },
  {
    title: "Pour commit",
    content: {
      syntaxes: [
        {
          code:
  `git add -A`,
          comments:
  `Indexe tous les fichiers pour préparer l'envoi vers la zone de transit locale`
        },
        {
          code:
  `git commit -m "description du commit"`,
          comments:
  `Pour envoyer vers la zone de transit locale`
        },
        {
          code:
  `git branch -M nouveau_nom_de_la_branche`,
          comments:
  `Si pas déjà fait, renomme la branche actuelle`
        },
        {
          code:
  `git push -u origin master`,
          comments:
  `Pour envoyer vers l'hébergeur`
        }
      ]
    },
    category: "Utilisation"
  },
  {
    title: "Pour gérer les branches",
    content: {
      syntaxes: [
        {
          code:
  `git branch`,
          comments:
  `Pour connaître les branches existantes`
        },
        {
          code:
  `git checkout nom_de_la_branche`,
          comments:
  `Pour switcher de branche`
        },
        {
          code:
  `git branch -d nom_de_la_branche_à_supprimer`,
          comments:
`Pour supprimer localement
Ne pas être sur la branche
Remplacer -d par -D si branche pas vide`
        },
        {
          code:
  `git push origin --delete nom_de_la_branche_à_supprimer`,
          comments:
  `Pour supprimer sur github`
        },
        {
          code:
  `git merge nom_de_la_branche_a_fusionner`,
          comments:
  `Pour fusionner/merger les modifications
Se mettre d'abord sur la branche qui accueillera les modifications`
        }
      ]
    },
    category: "Utilisation"
  },
  {
    title: "Pour modifier",
    content: {
      syntaxes: [
        {
          code:
  `git stash`,
          comments:
  `Pour annuler et mettre de côté modification non commité sur la branche`
        },
        {
          code:
  `git stash list`,
          comments:
  `Pour consulter les modifications mises de côté`
        },
        {
          code:
  `git stash apply`,
          comments:
`Pour appliquer modification mise de côté via git stash
Si plusieurs stash, on peut avoir la liste grâce à git stash list et définir lequel utiliser avec : 
git stash apply stash@{id_du_stash}`
        },
        {
          code:
`git log

git revert id_du_commit --hard

git revert id_du_commit —mixed`,
          comments:
`Pour annuler commit local sur branche principale
git log permet de récupérer l'id des commits
--hard supprimer tous les commits suivants
-mixed supprimer le commit sans impacter localement
On peut remplacer revert par reset pour supprimer tout ce qui suit le commit`
        },
        {
          code:
  `git merge nom_de_la_branche_a_fusionner`,
          comments:
`Pour fusionner/merger les modifications
Se mettre d'abord sur la branche qui accueillera les modifications`
        }
      ]
    },
    category: "Utilisation"
  },
]