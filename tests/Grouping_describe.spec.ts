import { test, expect } from "@playwright/test";

test.describe("group1", async()=>{

      test("test1", async()=>{
        console.log("this is test1");
      });


      test("test2", async()=>{
        console.log("this is test2");
      });
});

test.describe("group2", async()=>{

      test("test1", async()=>{
        console.log("this is test1");
      });


      test("test2", async()=>{
        console.log("this is test2");
      });
});

// Nested group

//Nested Groups // Nested describe blocks

test.describe('E-Commerce', () => {

    test.describe('Login to app', () => {

        test('Valid login check', async () => {
            console.log(" this is Test1 ......")
        });

        test('Invalid login check', async () => {
            console.log(" this is Test2 ......")
        });
    });

    test.describe('Cart', () => {
        test('Add item to cart', async () => {
            console.log(" this is Test3 ......")
        });

        test('Remove item from cart', async () => {
            console.log(" this is Test4 ......")
        });
    });

});

test.describe.serial('Another Group', async () => {

    test('Test1', async () => {
        console.log(" this is Test1 ......")
    });


    test('Test2', async () => {
        console.log(" this is Test2 ......")
    });

})

