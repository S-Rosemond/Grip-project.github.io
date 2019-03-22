import React, { Fragment } from 'react';
import { ContextConsumer } from '../../context/Context';
import Title from '../Home/Home-Fragments/HomeTitle';
import Cart, { CartListing } from '../Cart/Cart';

export default function Beverages(props) {
	return (
		<ContextConsumer>
			{value => {
				return (
					<Fragment>
						<Title
							fontsize="2.875rem"
							number="Happy Hours"
							subtitle="3:00pm - 6:00pm "
							textStroke="#202020"
							shadowFont=" 3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000"
						/>
						<Title
							subtitle="HAPPY HOUR FOOD REQUIRES A MINIMUM OF ONE DRINK PER PERSON"
							typographyColor="error"
						/>
						<Cart banner="Drinks" cartlist={<CartListing list={value.happy_drinks} />} />
						<Cart banner="Appetizers" cartlist={<CartListing list={value.happy_appetizers} />} />
					</Fragment>
				);
			}}
		</ContextConsumer>
	);
}

// menu={value.happy_drinks}
// menu={value.happy_appetizers}