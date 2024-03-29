﻿using Core.Entities;
using Core.Entities.OrderAggregate;
using System.Text.Json;

namespace Infrastructure.Data
{
    public class AppDbContextSeed
    {
        public static async Task SeedAsync(AppDbContext context)
        {
            if (!context.ProductBrands.Any())
            {

                var brandsData = File.ReadAllText("../Infrastructure/Data/SeedData/brands.json");
                var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);
                foreach (var brand in brands)
                {

                    brand.Id = 0;
                }
                context.ProductBrands.AddRange(brands);


            }
            if (!context.ProductTypes.Any())
            {
                var typesData = File.ReadAllText("../Infrastructure/Data/SeedData/types.json");
                var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);
                foreach (var type in types)
                {

                    type.Id = 0;
                }
                context.ProductTypes.AddRange(types);
            }
            if (!context.Products.Any())
            {
                var productsData = File.ReadAllText("../Infrastructure/Data/SeedData/products.json");
                var products = JsonSerializer.Deserialize<List<Product>>(productsData);
                foreach (var product in products)
                {
                    product.Id = 0;
                }
                context.Products.AddRange(products);
            }
            if (!context.DeliveryMethods.Any())
            {
                var deliveryData = File.ReadAllText("../Infrastructure/Data/SeedData/delivery.json");
                var deliveries = JsonSerializer.Deserialize<List<DeliveryMethod>>(deliveryData);
                foreach (var delivery in deliveries)
                {
                    delivery.Id = 0;
                }
                context.DeliveryMethods.AddRange(deliveries);
            }

            if (context.ChangeTracker.HasChanges())
            {
                await context.SaveChangesAsync();
            }
        }

    }
}
