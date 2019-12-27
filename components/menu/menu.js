const menu = {
  drinks: {
    cocktails: [
      {
        title: 'Mango Unchained',
        text: `Pinnacle mango vodka, mango
            nectar, lime, tripel sec and chamoy`,
        price: '10.00'
      },
      {
        title: 'Violet Delight',
        text: `Maker's Mark, TattersallSour Cherry Liquer, simple syrup and bitters`,
        price: '10.00'
      },
      {
        title: 'Winter Mule',
        text: `Ginger beer, Tito’s vodka,
            Tattersall cranberry liquer`,
        price: '10.00'
      },
      {
        title: 'Pilesen Negroni',
        text: `Espolon rep,  Tattersaill bitter orange, 
            punt y mes`,
        price: '10.00'
      },
      {
        title: 'Juan Collins',
        text: `Espolon blanco tequilla fresh lemon juice, agave`,
        price: '10.00'
      },
      {
        title: 'The Detox',
        text: `New Holland gin, arugula syrup, fresh lemon juice`,
        price: '10.00'
      },
      {
        title: 'Punch Drunk',
        text: `Nordic rum, apple cider &
            cinnamon stick, served warm`,
        price: '10.00'
      },
      {
        title: 'Smoking Rose',
        text: `Banhez mezcal, rose simple, squirt, grapefruit juice, fresh lime`,
        price: '10.00'
      }
    ],
    wines: [
      {
        title: 'WHITE',
        text: `Forchir Pinot  Grigio
  Blanc De Camarsac Sauv Blanc`,
        price: '8.00'
      },
      {
        title: 'RED',
        text: `Gougenheim Malbec Tarrica Pinot Noir`,
        price: '8.00'
      },
      {
        title: 'PINK',
        text: `Domain De Bachellery Rose`,
        price: '8.00'
      },
      {
        title: 'SPARKLING',
        text: `Gougenheim  Sparkling Rose
              J. Roget `,
        price: '8.00'
      }
    ]
  },
  beer: {
    drafts: [
      {
        title: 'Virtue Southcider',
        text: 'slightly sweet w/ subtle vanilla notes. 5/5%',
        price: '6.00'
      },
      {
        title: '21st Amendment El Sully',
        text: 'mexican-styleger, light & crisp. 4.8%',
        price: '5.00'
      },
      {
        title: 'Allagash White',
        text: 'belgian style wheat w/ corriander & orange 5.2%',
        price: '6.00'
      },
      {
        title: 'Lo Re Daemon',
        text: 'Belgian golden ale w/ strong personality. 9%',
        price: '7.00'
      },
      {
        title: 'Lagunitas Little Sumpin Sumpin',
        text: 'Wheaty with big citrus hops. 7.5%',
        price: '6.00'
      },
      {
        title: '18th St. Rise of Angels',
        text: 'Double imperial IPA. 7.7%',
        price: '7.00'
      },
      {
        title: 'Miskatonic Westcoast Wizard',
        text: 'Classic westcoast IPA, 9oz. 6.3%',
        price: '6.00'
      },
      {
        title: `Founder's Dirty Bastard`,
        text: 'Malty & rich scoth ale. 8.5%',
        price: '6.00'
      },
      {
        title: 'Stone Xocoveza',
        text: 'Stout inspired by mexican hot chocolate, 9oz. 8.1%',
        price: '8.00'
      },
      {
        title: 'MapleWood Brownie Points',
        text: 'Brown ale w/ chocolate & roffe flavors. 6.3%',
        price: '6.00'
      }
    ],
    packaged: [
      {
        title: 'Press Blackerry & Hibiscous',
        text: 'naturally flavored hard seltzer. 4%',
        price: '5.00'
      },
      {
        title: `(Sp)Ace Blood Orange Cider`,
        text: `Slight sweet, unfiltered cider. 6.9%`,
        price: '6.00'
      },
      {
        title: `Anderson Valley Cherry Gose`,
        text: `Sour brewed w/ cherry juice. 4.2%`,
        price: '6.00'
      },
      {
        title: `Nothcoast Scrimshaw Pills`,
        text: `German style pilsner. 4.5%`,
        price: '6.00'
      },
      {
        title: `Greenbush Oro de Tontos`,
        text: `Crisp & traditional lager. 4.7%`,
        price: '5.00'
      },
      {
        title: `Off Color Very Very Far`,
        text: `Belgian style blonde ale. 6%`,
        price: '8.00'
      },
      {
        title: `Boulevard Unfiltered Wheat`,
        text: `Easy drinking wheat ale. 4.4%`,
        price: '6.00'
      },
      {
        title: `Forbidden Root Strawberry Basil`,
        text: `Hefeweizen brewed w/ strawberry & basil. 5%`,
        price: '8.00'
      },
      {
        title: `Sweet Water Mango Kush`,
        text: `American wheat w/ herbal mango notes. 5%`,
        price: '6.00'
      },
      {
        title: `Whiner Bleu Tub`,
        text: `American wild ale w/ blueberry. 5.6%`,
        price: '7.00'
      },
      {
        title: `Oskar Blues Can-O-Bliss`,
        text: `Tropical fruit packed IPA. 7.2%`,
        price: '6.00'
      },
      {
        title: `Avery Ellie's Brown`,
        text: `Well balanced brown ale w/ vanilla notes`,
        price: '6.00'
      },
      {
        title: `War Pigs Lazurite`,
        text: `Bright & juicy American IPA. 7.5%`,
        price: '7.00'
      },
      {
        title: `Maui Coconut Porter`,
        text: `A robust dark ale w/ coconut & mocha. 6%`,
        price: '8.00'
      },
      {
        title: `(Alter)ior Motive IPA`,
        text: `Cirtus hopped midwest style IPA. 7%`,
        price: '6.00'
      },
      {
        title: 'New Holland Dragons Milk',
        text: 'Barrel aged Imperial Stout w/ roasty malts. 11%',
        price: '6.00'
      }
    ]
  },
  appetizers: [
    {
      title: `Fried Ravioli`,
      text: `stuffed with mozzarella, ricotta, and jalapenos`,
      price: '8.00'
    },
    {
      title: `Chips and Guacamole`,
      text: `Simply delicious, always a classic go to`,
      price: '6.00'
    },
    {
      title: `Mixed Fries`,
      text: `with chipotle ketchup & maple aioli`,
      price: '5.50'
    },
    {
      title: `Fried Pickles`,
      text: `tempura battered pickle spears with chipotle ranch`,
      price: '7.00'
    },
    {
      title: `Empanadas`,
      text: `choose any three: black bean and banana with cranberry aioli, spinach artichoke with salsa, chipotle chicken with avocado sour cream.`,
      subtitle: (
        <>
          <p className='para new-line'>
            choose any three: <strong>$6</strong>
          </p>
          <p className='para new-line'>
            choose any six: <strong>$10</strong>
          </p>
        </>
      ),
      price: '6.00'
    },
    { title: `Hummus`, text: `with pita and veggies`, price: '7.00' },
    {
      title: `Fried Mozzarella Squares`,
      text: `with marinara and ranch dressing`,
      price: '8.00'
    },
    {
      title: `Tempura Veggies`,
      text: `with wasabi aioli and soy sauce`,
      price: '8.00'
    },
    {
      title: `Buffalo Wings`,
      text: `6 wings with celery and ranch dressing`,
      subtitle: (
        <>
          <p className='para new-line'>
            12 wings: <strong>$11</strong>
          </p>
        </>
      ),
      price: '8.00'
    },
    {
      title: `Chicken Quesadilla`,
      text: `black beans, chipotle cream sauce, cheddar and chihuahua cheeses with sour cream, guacamole & salsa`,
      price: '9.50'
    },
    {
      title: `Onion Rings`,
      text: `with ranch dressing & chipotle ketchup`,
      price: '6.00'
    },
    {
      title: `Vegetable Quesadilla`,
      text: `bell peppers, mushrooms, onions, black beans, cheddar & chihuahua cheeses with sour cream, guacamole & salsa`,
      price: '8.00'
    },
    {
      title: `Nachos`,
      text: `cheddar & chihuahua cheeses, black beans, pico de gallo, sour cream with salsa.`,
      subtitle: (
        <>
          <p className='para new-line'>
            With Chicken Or Beef <strong>$9</strong>
          </p>{' '}
          <p className='para new-line'>
            With Steak: <strong>$10</strong>
          </p>
        </>
      ),
      price: '8.00'
    },
    {
      title: `Portobello Fries`,
      text: `with wasabi aioli & soy sauce`,
      price: '8.00'
    },
    {
      title: `Sweet Potato Fries`,
      text: `with lemon and maple aiolis`,
      price: '6.50'
    },
    {
      title: `French Fries`,
      text: `with ranch dressing and chipotle ketchup`,
      price: '4.00'
    }
  ],
  soupSalad: [
    {
      title: `Caesar Salad`,
      text: `Romaine, croutons, parmesan cheese, red onions.`,
      subtitle: (
        <>
          <p className='para new-line'>
            Add Chicken for <strong>$2</strong>
          </p>
          <p className='para new-line'>
            Steak, Salmon or tuna for <strong>$3</strong>
          </p>
        </>
      ),
      price: '8.00'
    },
    {
      title: `Kale Salad`,
      text: `avocado, mandarins, roasted red pepper, citrus vinaigrette.`,
      subtitle: (
        <>
          <p className='para new-line'>
            Add Chicken for <strong>$2</strong>
          </p>
          <p className='para new-line'>
            Steak, Salmon or tuna for <strong>$3</strong>
          </p>
        </>
      ),
      price: '8.00'
    },
    {
      title: `Chopped Salad`,
      text: `romaine, queso fresco, tomato, avocado, carrots and pico de gallo with buttermilk ranch.`,
      subtitle: (
        <>
          <p className='para new-line'>
            Add Chicken for <strong>$2</strong>
          </p>
          <p className='para new-line'>
            Steak, Salmon or tuna for <strong>$3</strong>
          </p>
        </>
      ),
      price: '8.00'
    },
    {
      title: `Smoked Salmon Salad`,
      text: `spinach, roasted almonds, mandarins, shredded smoked salmon and cucumber with citrus vinaigrette`,
      price: '11.00'
    },
    {
      title: `Home-made Tomato Bisque`,
      text: `served with a homemade cracker`,
      subtitle: (
        <>
          <p className='para new-line'>
            Cup: <strong>$3</strong>
          </p>{' '}
          <p className='para new-line'>
            Bowl: <strong>$5</strong>
          </p>
        </>
      ),
      price: '3.00'
    },
    {
      title: `Simone's Soup Of The Day`,
      text: `made fresh and ever-changing`,
      subtitle: (
        <>
          <p className='para new-line'>
            Cup: <strong>$3</strong>
          </p>{' '}
          <p className='para new-line'>
            Bowl: <strong>$5</strong>
          </p>
        </>
      ),
      price: '3.00'
    },
    {
      title: `Side Salad`,
      text: `spinach, tomato, cucumber and carrots with house vinaigrette.`,
      subtitle: (
        <>
          <p className='para new-line'>
            Add Chicken for <strong>$2</strong>
          </p>
          <p className='para new-line'>
            Steak, Salmon or tuna for <strong>$3</strong>
          </p>
        </>
      ),
      price: '4.00'
    },
    {
      title: `Caprese Salad`,
      text: `fresh mozzarella, fresh basil, tomato and balsamic reduction.`,
      subtitle: (
        <>
          <p className='para new-line'>
            Add Chicken for <strong>$2</strong>
          </p>
          <p className='para new-line'>
            Steak, Salmon or tuna for <strong>$3</strong>
          </p>
        </>
      ),
      price: '7.50'
    },
    {
      title: `Simone’s Salad`,
      text: `spinach, cranberries, almonds, goat cheese and pickled red onions with balsamic vinaigrette.`,
      subtitle: (
        <>
          <p className='para new-line'>
            Add Chicken for <strong>$2</strong>
          </p>
          <p className='para new-line'>
            Steak, Salmon or tuna for <strong>$3</strong>
          </p>
        </>
      ),
      price: '8.50'
    },
    {
      title: `Black & Blue Salad`,
      text: `grilled NY strip layered w/ tomatoes, onions, bleu cheese, spinach and fresh basil with balsamic vinaigrette`,
      price: '11.00'
    }
  ],
  pizzas: [
    {
      title: `Margherita Pizza`,
      text: `Fresh Mozzarella, basil, balsamic dressing on an olive oil crust`,
      price: '9.00'
    },
    {
      title: `Chicken Pesto Pizza`,
      text: `mozzarella, chicken, pesto, roasted red peppers.`,
      subtitle: (
        <>
          <p className='para new-line'>
            Each additional veggie: <strong>$.50</strong>
          </p>
          <p className='para new-line'>
            Each additional meat: <strong>$1.00</strong>
          </p>
        </>
      ),
      price: '9.00'
    },
    {
      title: `Pilsen Pizza`,
      text: `black bean sauce, beef, pico de gallo, chihuahua & queso fresco.`,
      subtitle: (
        <>
          <p className='para new-line'>
            Each additional veggie: <strong>$.50</strong>
          </p>
          <p className='para new-line'>
            Each additional meat: <strong>$1.00</strong>
          </p>
        </>
      ),
      price: '9.00'
    },
    {
      title: `Tuscan Pizza`,
      text: `roasted red peppers, portobella mushrooms and mozzarella.`,
      subtitle: (
        <>
          <p className='para new-line'>
            Each additional veggie: <strong>$.50</strong>
          </p>
          <p className='para new-line'>
            Each additional meat: <strong>$1.00</strong>
          </p>
        </>
      ),
      price: '8.00'
    },
    {
      title: `Traditional Pizza`,
      text: `italian sausage, green peppers, mushrooms and mozzarella.`,
      subtitle: (
        <>
          <p className='para new-line'>
            Each additional veggie: <strong>$.50</strong>
          </p>
          <p className='para new-line'>
            Each additional meat: <strong>$1.00</strong>
          </p>
        </>
      ),
      price: '9.00'
    },
    {
      title: `BBQ Chicken Pizza`,
      text: `chicken, bbq sauce, cheddar and jack cheeses.`,
      subtitle: (
        <>
          <p className='para new-line'>
            Each additional veggie: <strong>$.50</strong>
          </p>
          <p className='para new-line'>
            Each additional meat: <strong>$1.00</strong>
          </p>
        </>
      ),
      price: '9.00'
    },
    {
      title: `Quinoa Pizza`,
      text: `toasted quinoa, caramelized red onions, avocado and mozzarella.`,
      subtitle: (
        <>
          <p className='para new-line'>
            Each additional veggie: <strong>$.50</strong>
          </p>
          <p className='para new-line'>
            Each additional meat: <strong>$1.00</strong>
          </p>
        </>
      ),
      price: '8.00'
    },
    {
      title: `Simone’s Pizza`,
      text: `alfredo sauce, potatoes, parmesan and rosemary syrup.`,
      subtitle: (
        <>
          <p className='para new-line'>
            Each additional veggie: <strong>$.50</strong>
          </p>
          <p className='para new-line'>
            Each additional meat: <strong>$1.00</strong>
          </p>
        </>
      ),
      price: '8.00'
    }
  ],
  sandwiches: [
    {
      title: `Meatball Sub`,
      text: `Ground angus beef, mozzarella,  marinara on a hoagie roll`,
      price: '10.50'
    },
    {
      title: `Simone’s Veggie Burger`,
      text: `Sweet corn, sweet potato, carrots, shallots, celery, cumin, Sriracha sauce, shoe string potatoes`,
      price: '9.00'
    },
    {
      title: `Steak Sandwich`,
      text: `grilled NY strip with bleu cheese, caramelized onions, lettuce and tomato on a hoagie roll`,
      subtitle: (
        <p className='para sandwiche--subtitle'>
          comes with a mix of hand cut french and sweet potato fries. substitute
          veggie of the day for no charge. substitute all sweet potato fries or
          a mixed green salad: <strong>$1.00</strong>
        </p>
      ),
      price: '11.00'
    },
    {
      title: `Grilled Salmon`,
      text: `topped with a salsa mayo, spinach and tomato.`,
      subtitle: (
        <p className='para sandwiche--subtitle'>
          comes with a mix of hand cut french and sweet potato fries. substitute
          veggie of the day for no charge. substitute all sweet potato fries or
          a mixed green salad: <strong>$1.00</strong>
        </p>
      ),
      price: '11.00'
    },
    {
      title: `Turkey Burger`,
      text: `Hand pressed ground turkey. Topped with swiss cheese and salsa mayo.`,
      subtitle: (
        <p className='para sandwiche--subtitle'>
          comes with a mix of hand cut french and sweet potato fries. substitute
          veggie of the day for no charge. substitute all sweet potato fries or
          a mixed green salad: <strong>$1.00</strong>
        </p>
      ),
      price: '9.50'
    },
    {
      title: `Buffalo Chicken`,
      text: `pulled chicken with buffalo sauce and celery relish`,
      subtitle: (
        <p className='para sandwiche--subtitle'>
          comes with a mix of hand cut french and sweet potato fries. substitute
          veggie of the day for no charge. substitute all sweet potato fries or
          a mixed green salad: <strong>$1.00</strong>
        </p>
      ),
      price: '9.00'
    },
    {
      title: `Blackened Tuna Steak`,
      text: 'seared medium rare w/salsa mayo & tomato',
      subtitle: (
        <p className='para sandwiche--subtitle'>
          comes with a mix of hand cut french and sweet potato fries. substitute
          veggie of the day for no charge. substitute all sweet potato fries or
          a mixed green salad: <strong>$1.00</strong>
        </p>
      ),
      price: '11.00'
    },
    {
      title: `Grilled Cheese`,
      text: `cheddar and chihuahua cheeses with a tomato slice and cup of tomato bisque`,
      subtitle: (
        <p className='para sandwiche--subtitle'>
          comes with a mix of hand cut french and sweet potato fries. substitute
          veggie of the day for no charge. substitute all sweet potato fries or
          a mixed green salad: <strong>$1.00</strong>
        </p>
      ),
      price: '9.00'
    },
    {
      title: `BLT`,
      text: `bacon, lettuce and tomato on multi-grain with avocado`,
      subtitle: (
        <p className='para sandwiche--subtitle'>
          comes with a mix of hand cut french and sweet potato fries. substitute
          veggie of the day for no charge. substitute all sweet potato fries or
          a mixed green salad: <strong>$1.00</strong>
        </p>
      ),
      price: '8.50'
    },
    {
      title: `Grilled Portobello`,
      text: `on multi-grain with pesto and cheddar cheese`,
      subtitle: (
        <p className='para sandwiche--subtitle'>
          comes with a mix of hand cut french and sweet potato fries. substitute
          veggie of the day for no charge. substitute all sweet potato fries or
          a mixed green salad: <strong>$1.00</strong>
        </p>
      ),
      price: '8.50'
    },
    {
      title: `Caesar Salad Wrap`,
      text: `with a cup of Tomato Bisque. add grilled chicken breast: ${(
        <strong>$2</strong>
      )}`,
      subtitle: (
        <p className='para sandwiche--subtitle'>
          comes with a mix of hand cut french and sweet potato fries. substitute
          veggie of the day for no charge. substitute all sweet potato fries or
          a mixed green salad: <strong>$1.00</strong>
        </p>
      ),
      price: '8.00'
    },
    {
      title: `Mexican Grilled Chicken Sandwich`,
      text: `with salsa mayo and pico de gallo`,
      subtitle: (
        <p className='para sandwiche--subtitle'>
          comes with a mix of hand cut french and sweet potato fries. substitute
          veggie of the day for no charge. substitute all sweet potato fries or
          a mixed green salad: <strong>$1.00</strong>
        </p>
      ),
      price: '9.50'
    },
    {
      title: `Custom Burger`,
      text: (
        <>
          add american, cheddar, swiss, bleu, ghost pepper jack, chihuahua
          cheese, grilled onions, jalapenos, mushrooms or pico de gallo for
          <strong> $.50</strong> add bacon, avocado, guacamole, portobella or
          goat cheese
          <strong> $1.00</strong>
        </>
      ),
      subtitle: (
        <p className='para sandwiche--subtitle'>
          comes with a mix of hand cut french and sweet potato fries. substitute
          veggie of the day for no charge. substitute all sweet potato fries or
          a mixed green salad: <strong>$1.00</strong>
        </p>
      ),
      price: '9.00'
    },
    {
      title: `Vegan Burger`,
      text: `quinoa, black beans and rice topped with pico de gallo`,
      subtitle: (
        <p className='para sandwiche--subtitle'>
          comes with a mix of hand cut french and sweet potato fries. substitute
          veggie of the day for no charge. substitute all sweet potato fries or
          a mixed green salad: <strong>$1.00</strong>
        </p>
      ),
      price: '9.00'
    },
    {
      title: `Pilsen Burger`,
      text: `jalapenos, guacamole and chihuahua cheese`,
      subtitle: (
        <p className='para sandwiche--subtitle'>
          comes with a mix of hand cut french and sweet potato fries. substitute
          veggie of the day for no charge. substitute all sweet potato fries or
          a mixed green salad: <strong>$1.00</strong>
        </p>
      ),
      price: '10.00'
    },
    {
      title: `Chipotle Burger`,
      text: `chipotle BBQ sauce, cheddar, bacon and onion ring`,
      subtitle: (
        <p className='para sandwiche--subtitle'>
          comes with a mix of hand cut french and sweet potato fries. substitute
          veggie of the day for no charge. substitute all sweet potato fries or
          a mixed green salad: <strong>$1.00</strong>
        </p>
      ),
      price: '9.00'
    }
  ],
  desserts: [
    {
      title: `Kristoffer's Tres Leches Cake`,
      text: `the classic dulce de leche. made fresh by the best`,
      price: '6.00'
    },
    {
      title: `Ice Cream Sundae`,
      text: `bobtail's hand-made vanilla ice cream and our house-made chocolate sauce highlight this classic.`,
      price: '6.00'
    },
    {
      title: `Dessert Of The Day`,
      text: `chef rafa creates extraordinarily delicious daily delights. indulge!`,
      price: '5.00'
    }
  ],
  brunch: [
    { title: `Tea`, text: ``, price: '2.00' },
    { title: `Bridgeport Coffee`, text: ``, price: '2.00' },
    { title: `Mimosa with fresh OJ`, text: ``, price: '7.50' },
    { title: `Simone’s Bloody Mary`, text: ``, price: '7.50' },
    {
      title: `Sides`,
      text: `hashbrowns, sausage, bacon or 2 eggs`,
      price: '3.00'
    },
    {
      title: `Breakfast Burger`,
      text: `topped with a fried egg, bacon, and cheddar cheese served with hashbrowns`,
      price: '10.00'
    },
    {
      title: `Breakfast Croisant`,
      text: `scrambled eggs, cheddar and bacon served with hashbrowns`,
      price: '9.00'
    },
    {
      title: `Pancakes`,
      text: `your choice of blueberry, chocolate chip or plain, all served with syrup`,
      price: '7.00'
    },
    {
      title: `Breakfast Burrito`,
      text: `eggs, bell peppers, mushrooms, onions, black beans and cheddar cheese served with hash browns`,
      price: '9.00'
    },
    {
      title: `Simone’s Omelette`,
      text: `carmelized red onions, mozzarella and bacon, topped with avocado served with hash browns`,
      price: '9.00'
    },
    {
      title: `Chilaquiles Suizo`,
      text: `with tomatillo green sauce`,
      price: '7.00'
    },
    {
      title: `Waffle`,
      text: `with fresh berries and a scoop of ice cream`,
      price: '7.00'
    },
    {
      title: `French Toast`,
      text: `red hen sweet bread, creme anglaise`,
      price: '8.00'
    }
  ]
};

export default menu;
