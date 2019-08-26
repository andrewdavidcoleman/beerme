const API = {

  getAllBeers: function(params){

    //axios
    return [
      {
        id: 1,
        name: 'IPA'
      },
      {
        id: 2,
        name: 'Golden Ale'
      },
      {
        id: 3,
        name: 'Belgian Wheat'
      }
    ]

  },

  getRecipeByBeerId: function(beerId) {

    //axios
    switch (beerId) {
      case 1:
        return {
          facts: [
            'ABV: 6.5%',
            'IBU: 50-55'
          ],
          ingredients:[
            '5 lbs Wheat Dry Malt Extract',
            '8 oz Flaked Wheat',
            '8 oz Biscuit Malt',
            '8 oz Vienna Malt',
            '1 oz Hallertau Hops',
            '1 oz More Hops',
            '1 oz More Hops',
            '1 oz More Hops',
            '1 oz More Hops',
            '1 oz More Hops',
          ],
          directions: [
            '1) add 3-5 gallons of water to a large pot & heat to 155" add specialty grains and...',
            '2) ...',
            '3) ...',
            '4) ...',
            '5) ...',
            '6) ...',
            '7) ...',
            '8) ...',
            '9) ...',
            '10) ...',
          ]
        };
        break;
      case 2:
        return {
          facts: [
            'ABV: 5.9%',
            'IBU: 15-18',
          ],
          ingredients:[
            '5 lbs Wheat Dry Malt Extract',
            '8 oz Flaked Wheat',
            '8 oz Biscuit Malt',
            '8 oz Vienna Malt',
            '1 oz Hallertau Hops',
            '1 oz Tangerine or Sweet Orange Peel',
            '2 tsp Ground Coriander(Optional)',
            'Wyeast 3942 Belgian Wheat of Wyeast 3944 Belgian Wit'
          ],
          directions: [
            '1) add 3-5 gallons of water to a large pot & heat to 155" add specialty grains and...',
            '2) ...',
            '3) ...',
            '4) ...',
            '5) ...',
            '6) ...',
            '7) ...',
            '8) ...',
            '9) ...',
            '10) ...'
          ]
        };
        break;
      case 3:
        return {
          facts: [
            'ABV: 4.5%',
            'IBU: 15-18'
          ],
          ingredients:[
            '5 lbs Wheat Dry Malt Extract',
            '8 oz Flaked Wheat',
            '8 oz Biscuit Malt',
            '8 oz Vienna Malt',
            '1 oz Hallertau Hops',
            '1 oz Tangerine or Sweet Orange Peel',
            '2 tsp Ground Coriander(Optional)',
            'Wyeast 3942 Belgian Wheat of Wyeast 3944 Belgian Wit'
          ],
          directions: [
            '1) add 3-5 gallons of water to a large pot & heat to 155" add specialty grains and...',
            '2) ...',
            '3) ...',
            '4) ...',
            '5) ...',
            '6) ...',
            '7) ...',
            '8) ...',
            '9) ...',
            '10) ...'
          ]
        };
        break;
      default:

    }

  }
}

export default API;
