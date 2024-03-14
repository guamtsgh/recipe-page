import banner from './assets/images/image-omelette.jpeg';
import './App.css'

function App() {
  return (
    <>
    <section id="banner">
      <img src={banner} alt='Omelette Banner'/>
    </section>
    <section id='text'>
      <h1 id='name'>Simple Omelette Recipe</h1>
      <p id='detail'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
      <div id='prepare'>
        <h3>Preparation time</h3>
        <ul>
          <li><span>Total:</span> Approximately 10 minutes</li>
          <li><span>Preparation:</span> 5 minutes</li>
          <li><span>Cooking:</span> 5 minutes</li>
        </ul>
      </div>
      <div id='ingredients'>
        <h2>Ingredients</h2>
        <ul>
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
      </div>
      <hr></hr>
      <div id='instructions'>
        <h2>Instructions</h2>
        <ol>
          <li><span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
          <li><span>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</li>
          <li><span>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
          <li><span>Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
          <li><span>Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
          <li><span>Enjoy:</span> Serve hot, with additional salt and pepper if needed.</li>
        </ol>
      </div>
      <hr></hr>
      <div id='nutrition'>
        <h2>Nutrition</h2>
        <p>The table below shows nutritional values per serving without the additional fillings.</p>
        <div id='table'>
          <div className='flex'>
            <p>Calories</p>
            <span>227kcal</span>
          </div>
        <hr/>
        <div className='flex'>
          <p>Carbs</p>
          <span>0g</span>
        </div>

        <hr />

        <div className='flex'>
          <p>Protein</p>
          <span>20g</span>
        </div>

        <hr />

        <div className='flex'>
          <p>Fat</p>
          <span>22g</span>
        </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default App;
