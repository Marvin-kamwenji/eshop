import React from 'react';
import Product from './Product.js';
import "./Home.css";

function Home() {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img src="https://cdn.pixabay.com/photo/2019/06/15/16/06/online-4275963__340.jpg" alt="" className="home__image" />

                <div className="home__row">
                    <Product 
                     id="001"
                     title="Red Nike Sneakers"
                     price={2300}
                     rating={4}
                     image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
                    />
                    <Product 
                    id="002"
                    title="Green Sneakers"
                    price={2000}
                    rating={3}
                    image="https://media.istockphoto.com/photos/modern-sport-shoes-picture-id623270836?k=20&m=623270836&s=612x612&w=0&h=C0WdoMeoHYugJy8mVgrTl8p1U8DltiZ25AzzjGY05GA="/>
                    <Product 
                     id="006"
                     title="Brooks"
                     price={3500}
                     rating={4}
                     image="https://www.brooksrunning.com/dw/image/v2/BGPF_PRD/on/demandware.static/-/Sites-brooks-master-catalog/default/dwf5484ed4/original/110369/110369-078-l-ghost-14-mens-cushion-running-shoe.jpg?sw=1388&sh=868&sm=cut&sfrm=png&bgcolor=F1F3F6"
                     />
                      <Product 
                     id="006"
                     title="Red Simple Shoes"
                     price={1000}
                     rating={4}
                     image="https://thumbs.dreamstime.com/b/vintage-red-shoes-23151148.jpg"
                     />
                </div>

                <div className="home__row">
                     <Product 
                     id="003"
                     title="Blue Canvas"
                     price={800}
                     rating={3}
                     image="https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg"
                       />
                    <Product
                    id="004"
                    title="Nike Go FlyEase" 
                    price={4500}
                    rating={5}
                    image="https://imageio.forbes.com/specials-images/imageserve/60143cbe8b3a95d30cc8f08a/Nike-GO-FlyEase-hands-free-shoe/960x0.jpg?height=435&width=711&fit=bounds"
                    />
                   <Product 
                    id="005"
                    title="Nike"
                    price={4500}
                    rating={3}
                    image="https://imageio.forbes.com/specials-images/imageserve/60143d266052011f37c8f08a/Nike-GO-FlyEase-hands-free-shoe/960x0.jpg?height=466&width=711&fit=bounds"
                   />
                   <Product 
                    id="005"
                    title="Navy blue trainers"
                    price={3500}
                    rating={3}
                    image="https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?k=20&m=1249496770&s=612x612&w=0&h=GR8ow3G0QWgkuhYPyEafoL5TMdAgzJvc7rxgOahqxO4="
                   />
                </div>


                <div className="home__row">
                <Product
                id="005"
                title="Women's Gym and training shoes"
                price={3500}
                rating={4}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZTl_ewL7E9YBHCrfbkcGnuOVpqJcKKsOiUfPcBz0RFrVAVk2XQ4hUydOSn0ia8BYfkw&usqp=CAU" 
                />
                <Product
                id="005"
                title="Nike SB Nyjah"
                price={4500}
                rating={4}
                image="https://www.skatedeluxe.com/blog/wp-content/uploads/2021/09/Wear-Test-Nyjah-Free-2-clean.jpg" 
                />
                 <Product
                id="005"
                title="Nike React"
                price={4500}
                rating={4}
                image="https://media.istockphoto.com/photos/sport-shoes-on-isolated-white-background-picture-id956501428?k=20&m=956501428&s=612x612&w=0&h=UC4qdZa2iA0PJvv0RIBlJDyF80wxFyLPq4YWvZa30Sc=" 
                />
                 <Product
                id="005"
                title="Converse"
                price={1000}
                rating={4}
                image="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310__340.png" 
                />
                </div>


            </div>
        </div>
    </div>
  )
}

export default Home