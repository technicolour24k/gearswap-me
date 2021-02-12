import React from 'react';
import { Title } from '../pageObjects';
import Tony from '../Images/cover.jpg';

function Live() {
  return (
    <div id="mainBody">
        <div class="content-grid">
            <div class="feature-grid-2 about">
                <Title title="Tony" />
                <img src={Tony} alt="" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div class="feature-grid-2 about">
                <Title title="Tony" />
                <img src={Tony} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero venenatis, semper diam nec, pharetra sem. Sed eu euismod est. Sed in metus ac leo sodales fringilla id ac lectus. Aliquam congue leo vitae pulvinar condimentum. Aenean porttitor ex erat, in semper nulla vehicula ac. Vivamus ipsum leo, aliquet nec laoreet sit amet, tristique nec turpis. Curabitur ut ligula id lorem euismod ultrices. Vestibulum eget arcu eget metus fringilla sagittis. Aliquam dignissim egestas varius. Cras sem est, congue id magna eu, tincidunt accumsan nunc. Aenean non tempus mauris.</p>
            </div>
        </div>
    </div>
  );
}
export default Live;
