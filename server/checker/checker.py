from github import RepoScanner
from criteria import *

class Checker:
    # criteria which are checked
    criteria = [ReadmeCriterion]

    def __init__(self, owner, repo):
        self.github = RepoScanner(owner, repo)

    def check(self):
        errors = []
        for criterion in Checker.criteria:
            if not criterion.check(self.github):
                errors.append({'description': criterion.description(),
                               'severity': criterion.severity(),
                               'suggestion': criterion.suggestion(),
                               'guide_link': criterion.guide_link()})
        return errors


