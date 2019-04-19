import React from 'react';

import './index.scss';

const About = () => (
  <div id="about">
    <h2>Qu'est ce que ce site ?</h2>
    <p>Ce site permet à toute personne possédant un compte Github de pouvoir disposer d'un tableau de bord de ses Repos Github.</p>
    <h2>Pourquoi ce site ?</h2>
    <p>Afin de pouvoir suivre plus facilement nos repos Github, mais surtout parce qu'on nous l'a demandé...</p>
    <h2>Comment obtenir mon token Github ?</h2>
    <p>Vous pouvez retrouver la démarche à suivre pour créer votre token Github <a href="https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line">ici</a>.</p>
    <h2>Crédits</h2>
    <p>Merci à Github pour cette formidable API, ainsi qu'à Tony pour ce projet qui ma éviter de devoir prendre le soleil ce weekend.</p>
  </div>
);

export default About;



