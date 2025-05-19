package app.com.server.service;


import app.com.server.entity.Budget;
import app.com.server.entity.Category;
import app.com.server.repositories.CategoryRepository;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public Category saveCategiry(Category category){
       return categoryRepository.save(category);
    }

   public Category updateCategory(Long id, Category updateCategory){
        return categoryRepository.findById(id).map(category -> {
            category.setCategory(updateCategory.getCategory());
            category.setBudget(updateCategory.setBudget());
            category.setUserId(updateCategory.getUserId());

            return categoryRepository.save(category);
        });
   }

   public void deleteCategory(Category id){
        categoryRepository.delete(id);
   }
}
