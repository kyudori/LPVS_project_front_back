package lpvs_test.lpvs_spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User createUser(String username, String password) {
        User user = new User(username, passwordEncoder.encode(password));
        return userRepository.save(user);
    }

    public User findUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public boolean signup(String username, String password) {
        // 이미 동일한 이름의 사용자가 존재하는지 확인
        if (userRepository.existsByUsername(username)) {
            return false; // 회원가입 실패: 이미 사용 중인 이름
        }

        User user = new User(username, passwordEncoder.encode(password));
        userRepository.save(user);
        return true; // 회원가입 성공
    }

    public boolean login(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return true; // 로그인 성공
        }
        return false; // 로그인 실패
    }
}
