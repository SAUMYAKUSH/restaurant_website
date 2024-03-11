import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[]
    },
    reducers:{
        addItem: (state, action)=>{
            const itemExist=state.items.find((item)=>{ 
                return item.card.info.id===action.payload.card.info.id
            })
            let cart=state.items;
            if(itemExist){
                cart=state.items.map((item)=>{
                    if(item.card.info.id===action.payload.card.info.id){
                      
                        return {
                            ...item,
                                quantity:item.quantity+1,
                            }
                    }else{
                        return item;
                    }
                })
               
                
            }
             else{
                cart.push({
                        quantity:1,
                        ...action.payload
                    })
                
             }
            
            console.log(action.payload.card.info.id);
            console.log(cart);
            state.items=cart;
         
        },
        removeItem: (state, action)=>{
                cart=[];
                for (let index = 0; index < state.items.length; index++) {
                    const element = state.items[index];
                    
                        if(element.card.info.id===action.payload.card.info.id){
                          if(element.quantity===1){
                              continue;
                          }
                          cart.push({
                              ...element,
                              quantity:element.quantity-1
                          })
                      }
                          else{
                              cart.push(element);
                          }
                        
                      
                    
                }
               
            
            state.items= cart;
            
        },
        clearCart:(state)=>{
            state.items.length=0;
        },
    }
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default  cartSlice.reducer;