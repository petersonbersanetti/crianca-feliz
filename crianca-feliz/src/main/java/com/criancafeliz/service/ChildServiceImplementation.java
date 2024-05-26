package com.criancafeliz.service;

import com.criancafeliz.model.Child;
import com.criancafeliz.model.User;
import com.criancafeliz.repository.ChildRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChildServiceImplementation implements ChildService {

    @Autowired
    private ChildRepository childRepository;

    @Override
    public Child createChild(Child child, User user) {
        Child createdChild = new Child ();
        createdChild.setName(child.getName());
        createdChild.setSusCard(child.getSusCard());
        createdChild.setVacCard(child.getVacCard());
        createdChild.setDateOfBirth(child.getDateOfBirth());
        createdChild.setUser(user);

        return childRepository.save(createdChild);
    }

    @Override
    public Child findChildById(Long id) throws Exception {
        Optional<Child> opt = childRepository.findById(id);
        if (opt.isPresent()){
            return opt.get();
        }
        throw new Exception("Criança não encontrada com o id: " +id);
    }

    @Override
    public void deleteChild(Long id) throws Exception {
        findChildById(id);
        childRepository.deleteById(id);
    }

    @Override
    public Child updateChild(Child child, Long id) throws Exception {
        Child oldChild = findChildById(id);

        if (child.getName()!=null) {
            oldChild.setName(child.getName());
        }
        if (child.getSusCard()!=null) {
            oldChild.setSusCard(child.getSusCard());
        }
        if (child.getVacCard()!=null) {
            oldChild.setVacCard(child.getVacCard());
        }
        if (child.getDateOfBirth()!=null) {
            oldChild.setDateOfBirth(child.getDateOfBirth());
        }
        return childRepository.save(oldChild);
    }

    @Override
    public List<Child> findAllChild() {
        return childRepository.findAll();
    }

    public List<Child> findChildrenByUser(User user) {
        return childRepository.findByUser(user);
    }
}
